export type Region = "US" | "APAC" | "UK" ;

export interface Order {
  orderId: string;
  orderDate: string;
  amount: number;
  currency: string;
  countryCode: Region;
}

export interface OrderDetails extends Order {
  orderDetails: {
    item: string;
    quantity: number;
    shippingMethod: string;
  };
  customerDetails?: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
  };
}
