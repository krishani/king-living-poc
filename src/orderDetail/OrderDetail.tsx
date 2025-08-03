import { Box, TextField, Paper } from '@mui/material';
import type { OrderDetails } from '../types/orders';

export const OrderDetail = ({ ...props }: OrderDetails) => {
  return (
    <div>
      <div className="header-container">
        <div className="header-content">
          <img src="/src/king-logo.webp" alt="King Living Logo" className="header-logo" />
          <h1 className="header-text">King Living</h1>
          <h2 className="subheader-text">Admin Dashboard</h2>
        </div>
      </div>
      <Paper
        elevation={3}
        sx={{
          width: '90%',
          maxWidth: 800,
          margin: 'auto',
          p: 4,
          mt: 6,
          bgcolor: '#ab7d7dff',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: 2,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            backgroundColor: '#ab7d7dff',
            padding: 3,
            borderRadius: 1,
          }}
        >
          <TextField label="Order ID" value={props.orderId} InputProps={{ readOnly: true }} InputLabelProps={{
            sx: { color: '#ffffff' }
          }}
            sx={{
              '& .MuiInputBase-input': {
                color: '#ffffff',
              }
            }} />
          <TextField label="Order Date" value={props.orderDate} InputProps={{ readOnly: true }}
            InputLabelProps={{ sx: { color: '#ffffff' } }}
            sx={{
            '& .MuiInputBase-input': {
              color: '#ffffff',
            }
          }} />
          <TextField label="Amount" value={props.amount} InputProps={{ readOnly: true }}
            InputLabelProps={{ sx: { color: '#ffffff' } }}
            sx={{
            '& .MuiInputBase-input': {
              color: '#ffffff',
            }
          }} />
          <TextField label="Currency" value={props.currency} InputProps={{ readOnly: true }}
            InputLabelProps={{ sx: { color: '#ffffff' } }}
            sx={{
            '& .MuiInputBase-input': {
              color: '#ffffff',
            }
            }} />
          <TextField label="Country Code" value={props.countryCode} InputProps={{ readOnly: true }}
            InputLabelProps={{ sx: { color: '#ffffff' } }}
            sx={{
            '& .MuiInputBase-input': {
              color: '#ffffff',
            }
          }}/>
          {props?.customerDetails?.name && <TextField label="Customer Name" value={props?.customerDetails?.name} InputProps={{ readOnly: true }}
            InputLabelProps={{ sx: { color: '#ffffff' } }}
            sx={{
            '& .MuiInputBase-input': {
              color: '#ffffff',
            }
          }}/>}
          {props?.customerDetails?.email && <TextField label="Customer Email" value={props?.customerDetails?.email} InputProps={{ readOnly: true }}
            InputLabelProps={{ sx: { color: '#ffffff' } }}
            sx={{
            '& .MuiInputBase-input': {
              color: '#ffffff',
            }
          }}/>}
        </Box>
      </Paper>
    </div>
  );
}