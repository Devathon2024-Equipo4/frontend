import React from 'react'

import Layout from '../layouts/Layout';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import RoutesConfig from './RoutesConfig';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: RoutesConfig,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes