import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './appRoutes/AppRoutes';

async function enableMocking() {
  if (import.meta.env.MODE === 'development') {
    await worker.start();
  }
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <AppRoutes/>
      </BrowserRouter>
    </React.StrictMode>
  );
});