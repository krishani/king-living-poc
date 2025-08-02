import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrderDetail } from '../../orderDetail/OrderDetail';
import type { Region } from '../../types/orders';

describe('OrderDetail', () => {
    const mockOrder = {
        orderId: 'ORD12345',
        orderDate: '2025-08-01',
        amount: 250.0,
        currency: 'AUD',
        countryCode: 'AU' as Region,
        customerDetails: {
            name: 'Alice Smith',
            email: 'alice@example.com',
        },
        orderDetails: {
            item: 'sofa',
            quantity: 1,
            shippingMethod: 'delivery'
        }
    };

    it('renders all order details correctly', () => {
        render(<OrderDetail {...mockOrder} />);

        expect(screen.getByText('Order Details')).toBeInTheDocument();

        expect(screen.getByDisplayValue('ORD12345')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2025-08-01')).toBeInTheDocument();
        expect(screen.getByDisplayValue(250.00)).toBeInTheDocument();
        expect(screen.getByDisplayValue('AUD')).toBeInTheDocument();
        expect(screen.getByDisplayValue('AU')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Alice Smith')).toBeInTheDocument();
        expect(screen.getByDisplayValue('alice@example.com')).toBeInTheDocument();
    });

    it('handles missing customer details gracefully', () => {
        const missingCustomer = {
            ...mockOrder,
            customerDetails: undefined
        }
        const { container } = render(
            <OrderDetail
                {...missingCustomer}
            />
        );

        // Core fields still visible
        expect(screen.getByDisplayValue('ORD12345')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2025-08-01')).toBeInTheDocument();

        // Empty customer fields should be rendered as empty strings
        const customerNameInput = container.querySelector('input[label="Customer Name"]') as HTMLInputElement;
        const customerEmailInput = container.querySelector('input[label="Customer Email"]') as HTMLInputElement;

        expect(customerNameInput).not.toBeInTheDocument();
        expect(customerEmailInput).not.toBeInTheDocument();
    });
});
