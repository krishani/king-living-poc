import { http } from "msw";
import { faker } from "@faker-js/faker";
import type { Order, Region, OrderDetails } from "../types/orders";

const regionCurrencyMap: Record<Region, string> = {
  US: "USD",
  APAC: "SGD",
  UK: "GBP",
};

const orders: Order[] = Array.from({ length: 30 }).map(() => {
  const countryCode = faker.helpers.arrayElement<Region>(["US", "APAC", "UK"]);
  return {
    orderId: faker.string.uuid(),
    orderDate: faker.date.recent({ days: 30 }).toISOString(),
    amount: parseFloat(
      faker.finance.amount({
        min: 50,
        max: 1000,
        dec: 2,
      })
    ),
    currency: regionCurrencyMap[countryCode],
    countryCode,
  };
});

function getData(): Order[] {
  return JSON.parse(sessionStorage.getItem("mockData") || "[]");
}

function setData(data: Order[]) {
  if (data.length > 0) sessionStorage.setItem("mockData", JSON.stringify(data));
}

export const handlers = [
  http.get("/api/orders", ({ request }) => {
    if (getData().length === 0) {
      setData(orders);
    }
    const url = new URL(request.url);
    const countryCode = url.searchParams.get("countryCode");
    const fromDate = url.searchParams.get("fromDate");
    const toDate = url.searchParams.get("toDate");
    let tempOrders = getData();

    const shouldFilterCountry = countryCode && countryCode !== "ALL";
    const shouldFilterFromDate = !!fromDate;
    const shouldFilterToDate = !!toDate;

    const filteredOrders = tempOrders.filter((order) => {
      if (shouldFilterCountry && order?.countryCode !== countryCode)
        return false;
      if (
        shouldFilterFromDate &&
        new Date(order?.orderDate) < new Date(fromDate)
      )
        return false;
      if (shouldFilterToDate && new Date(order?.orderDate) > new Date(toDate))
        return false;
      return true;
    });

    return Response.json(filteredOrders, { status: 200 });
  }),

  http.get("/api/orders/:orderId/:countryCode", ({ params }) => {
    const { orderId, countryCode } = params as {
      orderId: string;
      countryCode: Region;
    };

    const order = getData().find(
      (o) => o.orderId === orderId && o.countryCode === countryCode
    );

    if (!order) {
      return Response.json({ error: "Order not found" }, { status: 404 });
    }

    const detailedOrder: OrderDetails = {
      ...order,
      orderDetails: {
        item: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 5 }),
        shippingMethod: faker.helpers.arrayElement([
          "Standard",
          "Express",
          "Next-Day",
        ]),
      },
      customerDetails: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
      },
    };

    return Response.json(detailedOrder, { status: 200 });
  }),
];
