import { useEffect, useState } from "react";
import type { Order, Region } from "../types/orders";
import { OrderTable } from "./OrderTable";
import { OrderFilters } from "./OrderFilters";
import { CircularProgress } from "@mui/material";
import { OrderStats } from "./OrderStats";
import { ErrorPrompt } from "../common/ErrorPrompt";

export const OrderTablePage = () => {
    const [orders, setOrders] = useState<Order[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchOrders = async (country: Region | 'ALL'): Promise<void> => {
        setLoading(true);
        try {
            const response = await fetch(`/api/orders?countryCode=${country}`);
            if (!response.ok) {
                throw new Error('Error fetching orders');
            }
            const result = await response?.json();
            setOrders(result);
            setLoading(false);
        } catch (e) {
            setError(true);
            setLoading(false);
        }
    }

    const filterOrdersByCountry = async (country: Region | 'ALL'): Promise<void> => {
        await fetchOrders(country);
    }

    const filterOrdersByDate = async (fromDate: Date, toDate: Date): Promise<void> => {
        const formatDate = (date: Date) => date.toISOString().split('T')[0];

        const response = await fetch(`/api/orders?countryCode=ALL&fromDate=${formatDate(fromDate)}&toDate=${formatDate(toDate)}`);
        const result = await response?.json();
        setOrders(result);
    }

    const handleClose = () => {
        setError(false);
    }

    useEffect(() => {
        fetchOrders('ALL');
    }, []);



    return (
        <>
            <h1 className={'heading'}>King Living Internal Dashboard</h1>
            {
                loading && <CircularProgress />
            }
            {
                error && <ErrorPrompt open={error} handleClose={handleClose} />

            }
            {orders?.length &&
                <div>
                    <OrderStats orders={orders || []} />
                    <OrderFilters filterByCountry={filterOrdersByCountry} filterByDate={filterOrdersByDate} />
                </div>
            }
            <OrderTable orders={orders || []} />
        </>
    )
}