import { Box, TextField, Paper } from '@mui/material';
import type { OrderDetails } from '../types/orders';

export const OrderDetail = ({ ...props }: OrderDetails) => {
  return (
    <Paper elevation={3} sx={{ maxWidth: 600, margin: 'auto', p: 4, mt: 6 }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Order ID" value={props.orderId} InputProps={{ readOnly: true }} />
        <TextField label="Order Date" value={props.orderDate} InputProps={{ readOnly: true }} />
        <TextField label="Amount" value={props.amount} InputProps={{ readOnly: true }} />
        <TextField label="Currency" value={props.currency} InputProps={{ readOnly: true }} />
        <TextField label="Country Code" value={props.countryCode} InputProps={{ readOnly: true }} />
        {props?.customerDetails?.name && <TextField label="Customer Name" value={props?.customerDetails?.name} InputProps={{ readOnly: true }} />}
        {props?.customerDetails?.email && <TextField label="Customer Email" value={props?.customerDetails?.email} InputProps={{ readOnly: true }} />}
      </Box>
    </Paper>
  );
}