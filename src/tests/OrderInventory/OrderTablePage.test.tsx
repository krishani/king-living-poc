import { render, screen, waitFor } from '@testing-library/react';
import { OrderTablePage } from '../../orderInventory/OrderTablePage.tsx';
import '@testing-library/jest-dom';

// Mock MUI CircularProgress (optional if it causes issues)
jest.mock('@mui/material', () => ({
    CircularProgress: () => <div data-testid="loader">Loading...</div>,
    Box: ({ children, ...props }: any) => <div data-testid="mui-box" {...props}>{children}</div>
}));

// Mock children components to focus test on fetch + rendering logic
jest.mock('../../orderInventory/OrderTable', () => ({
    OrderTable: ({ orders }: any) => <div data-testid="order-table">Orders Count: {orders.length}</div>
}));
jest.mock('../../orderInventory/OrderFilters', () => ({
    OrderFilters: () => <div data-testid="order-filters">Filters</div>
}));
jest.mock('../../orderInventory/OrderStats', () => ({
    OrderStats: () => <div data-testid="order-stats">Stats</div>
}));
jest.mock('../../common/ErrorPrompt', () => ({
    ErrorPrompt: ({ open }: any) => open ? <div data-testid="error">Error</div> : null
}));

describe('OrderTablePage', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders loader and then order data on successful fetch', async () => {
        const mockOrders = [
            { id: 1, region: 'AU', createdAt: '2025-07-01' },
            { id: 2, region: 'SG', createdAt: '2025-07-02' }
        ];

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockOrders
        });

        render(<OrderTablePage />);

        // Loader appears initially
        expect(screen.getByTestId('loader')).toBeInTheDocument();

        // Wait for orders to be rendered
        await waitFor(() => {
            expect(screen.getByTestId('order-table')).toHaveTextContent('Orders Count: 2');
        });

        // Filters and stats should be shown
        expect(screen.getByTestId('order-filters')).toBeInTheDocument();
        expect(screen.getByTestId('order-stats')).toBeInTheDocument();
    });

    it('shows error prompt if fetch fails', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false
        });

        render(<OrderTablePage />);

        await waitFor(() => {
            expect(screen.getByTestId('error')).toBeInTheDocument();
        });
    });

    it('renders with empty orders array', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => []
        });

        render(<OrderTablePage />);

        await waitFor(() => {
            expect(screen.getByTestId('order-table')).toHaveTextContent('Orders Count: 0');
        });
    });
});
