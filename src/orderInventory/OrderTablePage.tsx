import { useEffect, useState } from "react";
import type { Order, Region } from "../types/orders";
import { OrderTable } from "./OrderTable";
import { OrderFilters } from "./OrderFilters";
import { Box, CircularProgress } from "@mui/material";
import { OrderStats } from "./OrderStats";
import { ErrorPrompt } from "../common/ErrorPrompt";
import '../common/style.css';

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
        <div>
            <div className="header-container">
                <div className="header-content">
                    <img src="/src/king-logo.webp" alt="King Living Logo" className="header-logo" />
                    <h1 className="header-text">King Living</h1>
                    <h2 className="subheader-text">Admin Dashboard</h2>
                </div>
            </div>

            <Box sx={{ mt: 4, px: 2 }}> {/* Added container with margin top */}
                {loading && <CircularProgress />}
                {error && <ErrorPrompt open={error} handleClose={handleClose} />}

                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    gap={4}
                    mb={4} /* Added margin bottom */
                >
                    <OrderStats orders={orders || []} />
                    <OrderFilters filterByCountry={filterOrdersByCountry} filterByDate={filterOrdersByDate} />
                </Box>

                <OrderTable orders={orders || []} />
            </Box>
        </div>
    )
}