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
            <Paper
                sx={{
                    width: '90%',
                    maxWidth: 1200,
                    margin: '0 auto',
                    p: 2,
                    bgcolor: '#ab7d7dff',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: 2,
                }}
            >
                <DataGrid
                    rows={mappedOrders}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{
                        border: 0,
                        color: '#ffffff',
                        backgroundColor: '#ab7d7dff',
                        '& .MuiDataGrid-columnHeaders': {
                            color: '#ffffff',
                            backgroundColor: '#ab7d7dff',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        },
                        '& .MuiDataGrid-columnHeader': {  // Add this to style individual column headers
                            backgroundColor: '#ab7d7dff',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {  // Add this to style header titles
                            color: '#ffffff',
                        },
                        '& .MuiDataGrid-row:nth-of-type(even)': {
                            backgroundColor: '#815050ff',
                        },
                        '& .MuiTablePagination-selectLabel': {
                            color: '#ffffff',
                        },
                        '& .MuiTablePagination-displayedRows': {
                            color: '#ffffff',
                        },
                        '& .MuiTablePagination-select': {
                            color: '#ffffff',
                        },
                        '& .MuiDataGrid-row:nth-of-type(odd)': {
                            backgroundColor: '#ab7d7dff',
                        },
                        '& .MuiDataGrid-cell': {
                            color: '#ffffff',
                        },
                        '& .MuiTablePagination-root': {
                            color: '#ffffff',
                        },
                        '& .MuiIconButton-root': {
                            color: '#ffffff',
                        },
                        '& .MuiDataGrid-footerContainer': {
                            backgroundColor: '#ab7d7dff',
                        }
                    }}
                />
            </Paper>
        </Box>
    )
}