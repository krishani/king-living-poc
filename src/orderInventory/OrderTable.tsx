import type { Order } from "../types/orders";
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'orderDate', headerName: 'Order Date', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'currency', headerName: 'Currency', flex: 1 },
    { field: 'countryCode', headerName: 'Country', flex: 1 },
    {
        field: 'view',
        headerName: 'Details',
        flex: 1,
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

const paginationModel = { page: 0, pageSize: 10 };

export const OrderTable = ({ orders }: { orders: Order[] }) => {
    const mappedOrders = orders.map((order, index) => ({
        ...order,
        id: index
    }));

    return (
        <Box className="table-container">
            <Paper className="table-paper">
                <DataGrid
                    rows={mappedOrders}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    className="data-grid"
                />
            </Paper>
        </Box>
    );
}