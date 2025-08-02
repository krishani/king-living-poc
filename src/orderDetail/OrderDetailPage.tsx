import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { OrderDetails } from "../types/orders";
import { OrderDetail } from "./OrderDetail";
import { CircularProgress } from '@mui/material';

export const OrderDetailPage = () => {
    const params = useParams();
    const [orderInfo, setOrderInfo] = useState<OrderDetails>();
    const [loading, setLoading] = useState<Boolean>();

    const fetchOrderDetails = async (): Promise<void> => {
        setLoading(true);
        try {

            const response = await fetch(`/api/orders/${params?.id}/${params?.country}`);
            const result = await response?.json();
            setOrderInfo(result);
        } catch (e) {
            setLoading(false);

        }
        setLoading(false);
    }

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    return (
        <div>
            {loading && <CircularProgress />}
            {orderInfo && <OrderDetail {...orderInfo} />}
        </div>
    )
}