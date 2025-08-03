# King Living POC

## Technical Design Decisions

### Frontend Focus

- Priority was given to frontend implementation
- Emphasis on user interface and experience

### TypeScript Implementation

- Used TypeScript for better code readability
- Enhanced maintainability through static typing
- Type safety for data structures like Order interface

### Mock Data Strategy

- Utilized FakerJS for generating mock order data
- Implemented MSW (Mock Service Worker) for API simulation
- Created endpoints for orders and order details

### Architecture Pattern

- Adopted Container-Presentational pattern
- Separated UI logic from business logic
- Clear separation of concerns in component structure

### UI Framework (Material UI)

Implemented features including:

- Readonly forms
- Date pickers
- Statistics display
- Data tables

### Testing Approach

- Implemented unit tests
- Set up Jest configuration
- Added test setup for Vite React + TypeScript

---

## Assumptions

- Asumed Order Data would take below format.

```
export interface Order {
  orderId: string;
  orderDate: string;
  amount: number;
  currency: string;
  countryCode: Region;
}
```

- /api/orders endpoint will return order details for all 3 regions.
- These query params can be used to filter orders by country and orderDate.

```
countryCode
fromDate
toDate
```

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/krishani/king-living-poc.git
cd king-living-poc
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Run tests

```bash
npm test
```

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run test` - Runs unit tests

### Environment Setup

The application uses MSW (Mock Service Worker) for API mocking. On first run, it will:

1. Register the service worker
2. Set up mock API endpoints
3. Generate fake data using FakerJS

### Port Configuration

The development server runs on:

- Default: http://localhost:5173

## AI Prompts

```
Create a mock API with fakerJs. one endpoint should return all orders, with order having fields orderId, orderDate, amount, currency, countryCode
This data should come from AU, APAC, and UK regions.
other endpoint is to get orderDetails when given orderId and countryCode. This should return orderDetails and customerDetails in addition to above fields.
use ts and fakerJs
```

```
Please don't create a seperate API
```

```
rest needs to be http instead
import { http } from 'msw';
Please correct the code, and rewrite the endpoints
```

```
msw_browser.js?v=63afbc81:1165 Uncaught (in promise) Error: [MSW] Failed to register the Service Worker:
```

```
This syntax is not allowed when 'erasableSyntaxOnly' is enabled.ts(1294)
```

```
show a readonly form with material UI
```

```
loader in material UI
```

```
filterByDate matrial UI
```

```
datepicker add maxDate and minDate
```

```
Add unit tests to OrderTablePage
```

```
I need to show statistics from order table such as total number of sales and orderCount.
matrial Ui
```

```
Add unit tests for OrderTablePage
```

```
I need to add unit test setup for vite react+ typescript app. Can you please provide the jest config and packages to add
```

## Development Process with AI Assistance

### Benefits

- **Rapid Prototyping**

  - Quick setup of mock API using FakerJS
  - Efficient implementation of Material UI components
  - Fast configuration of Jest testing environment

- **Problem Solving**

  - Resolved MSW Service Worker registration issues
  - Fixed TypeScript configuration errors
  - Debugged test setup for Vite React

- **Code Quality**
  - Improved component structure suggestions
  - Enhanced type safety implementations
  - Better testing coverage guidance

### Development Timeline

1. **Initial Setup**

   - AI assisted with project scaffolding
   - Quick implementation of mock API endpoints
   - Efficient TypeScript configuration

2. **UI Development**

   - Rapid Material UI component integration
   - Streamlined styling and theming
   - Enhanced form validations

3. **Testing Implementation**
   - Automated test setup configuration
   - Comprehensive test coverage planning
   - Quick resolution of testing issues

### Challenges Overcome

- MSW configuration complexities
- TypeScript type definitions
- Jest setup with Vite
- Component styling optimization

### Learning Outcomes

- Better understanding of MSW implementation
- Improved TypeScript best practices
- Enhanced testing strategies
- Efficient Material UI usage
