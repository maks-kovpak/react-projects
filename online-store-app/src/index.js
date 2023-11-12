import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import CardsContainer from './views/CardsContainer';
import ProductDetail from './views/ProductDetail';
import ErrorPage from './views/ErrorPage';
import UserProfile from './views/UserProfile';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './views/LoginForm';
import ProductsProvider from './providers/ProductsProvider';
import AuthProvider from './providers/AuthProvider';
import Categories from './views/Categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Categories />,
      },
      {
        path: 'products/:categoryID?',
        element: <CardsContainer />,
      },
      {
        path: 'login/',
        element: <LoginForm />,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
      },
      {
        path: 'profile/',
        element: <UserProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>
);
