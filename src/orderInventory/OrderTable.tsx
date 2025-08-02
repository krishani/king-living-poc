import type { Order } from "../types/orders";
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'orderDate', headerName: 'Order Date', width: 250 },
    { field: 'amount', headerName: 'Amount', width: 130 },
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
        <div
            style={{
                display: 'flex',
                paddingTop: '40px',
            }}
        >
            <Paper sx={{ height: '100%', width: '75%' }}>
                <DataGrid
                    rows={mappedOrders}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </div>
    )
}