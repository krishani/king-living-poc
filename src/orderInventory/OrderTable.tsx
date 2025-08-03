import type { Order } from "../types/orders";
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'orderDate', headerName: 'Order Date', width: 300 },
    { field: 'amount', headerName: 'Amount', width: 150 },
    { field: 'currency', headerName: 'Currency', width: 130 },
    { field: 'countryCode', headerName: 'Country', width: 200 },
    {
        field: 'view',
        headerName: 'Details',
        width: 250,
        sortable: false,
        filterable: false,
        renderCell: (params) => {
            const navigate = useNavigate();
            return (
                <Link
                    onClick={() => navigate(`/details/${params.row.orderId}/${params.row.countryCode}`)}
                    underline="hover"
                >
                    View Order Details
                </Link>
            )
        },
    },
];

const paginationModel = { page: 0, pageSize: 5 };

export const OrderTable = ({ orders }: { orders: Order[] }) => {
    const mappedOrders = orders.map((order, index) => {
        return {
            ...order,
            id: index
        }
    })
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paper sx={{ width: '90%', maxWidth: 1200, margin: '0 auto', p: 2 }}>
                <DataGrid
                    rows={mappedOrders}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    )
}