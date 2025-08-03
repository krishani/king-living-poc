import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { OrderDetails } from "../types/orders";
import { OrderDetail } from "./OrderDetail";
import { Box, Button, CircularProgress } from '@mui/material';
import '../common/style.css';
import { useNavigate } from 'react-router-dom';

export const OrderDetailPage = () => {
    const params = useParams();
    const [orderInfo, setOrderInfo] = useState<OrderDetails>();
    const [loading, setLoading] = useState<Boolean>();
    const navigate = useNavigate();

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
            <h1 className={'heading'}>Order Details</h1>
            {loading && <CircularProgress />}
            {orderInfo && <OrderDetail {...orderInfo} />}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                    mt: 4
                }}
            >
                <Button variant="outlined" onClick={() => navigate('/')}>
                    Back
                </Button>
            </Box>
        </div>
    )
}