# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

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
