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
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            padding: 4, 
                            textAlign: 'center',
                            backgroundColor: 'hwb(0 57% 24%)',
                            color: '#ffffff'
                        }}
                    >
                        <Typography variant="h6" sx={{ fontFamily: 'Raleway, sans-serif' }}>
                            Total Orders
                        </Typography>
                        <Typography variant="h4" sx={{ fontFamily: 'Raleway, sans-serif' }}>
                            {totalOrders}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            padding: 4, 
                            textAlign: 'center',
                            backgroundColor: 'hwb(0 57% 24%)',
                            color: '#ffffff'
                        }}
                    >
                        <Typography variant="h6" sx={{ fontFamily: 'Raleway, sans-serif' }}>
                            Total Sales
                        </Typography>
                        <Typography variant="h4" sx={{ fontFamily: 'Raleway, sans-serif' }}>
                            ${totalSales.toFixed(2)}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}