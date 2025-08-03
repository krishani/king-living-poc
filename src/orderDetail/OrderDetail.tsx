import { Box, TextField, Paper } from '@mui/material';
import type { OrderDetails } from '../types/orders';

export const OrderDetail = ({ ...props }: OrderDetails) => {
  const commonTextFieldProps = {
    InputProps: { readOnly: true },
    className: 'order-detail-field'
  };

  return (
    <div>
      <div className="header-container">
        <div className="header-content">
          <img src="/src/king-logo.webp" alt="King Living Logo" className="header-logo" />
          <h1 className="header-text">King Living</h1>
          <h2 className="subheader-text">Order Details</h2>
        </div>
      </div>
      <Paper elevation={3} className="order-detail-paper">
        <Box className="order-detail-container">
          <TextField
            label="Order ID"
            value={props.orderId}
            {...commonTextFieldProps}
          />
          <TextField
            label="Order Date"
            value={props.orderDate}
            {...commonTextFieldProps}
          />
          <TextField
            label="Amount"
            value={props.amount}
            {...commonTextFieldProps}
          />
          <TextField
            label="Currency"
            value={props.currency}
            {...commonTextFieldProps}
          />
          <TextField
            label="Country Code"
            value={props.countryCode}
            {...commonTextFieldProps}
          />
          {props?.customerDetails?.name && (
            <TextField
              label="Customer Name"
              value={props?.customerDetails?.name}
              {...commonTextFieldProps}
            />
          )}
          {props?.customerDetails?.email && (
            <TextField
              label="Customer Email"
              value={props?.customerDetails?.email}
              {...commonTextFieldProps}
            />
          )}
        </Box>
      </Paper>
    </div>
  );
}