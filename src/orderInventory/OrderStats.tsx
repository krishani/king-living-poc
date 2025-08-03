import { Box, Paper, Typography, Grid } from "@mui/material";
import type { Order } from "../types/orders";
import { convertCurrency } from "../utils/summary";

export const OrderStats = ({ orders }: { orders: Order[] }) => {
    let totalOrders = 0;
    let totalSales = 0;

    orders.forEach(order => {
        totalOrders += 1;
        totalSales += convertCurrency(order?.amount, order?.currency);
    })

    return (
        <Box mb={2} gap={4}>
            <Grid container spacing={2}>
                <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f8f8f8' }}>
                    <Typography variant="h6">Total Orders</Typography>
                    <Typography variant="h4">{totalOrders}</Typography>
                </Paper>
                <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f8f8f8' }}>
                    <Typography variant="h6">Total Sales</Typography>
                    <Typography variant="h4">${totalSales.toFixed(2)}</Typography>
                </Paper>
            </Grid>
        </Box>
    )
}