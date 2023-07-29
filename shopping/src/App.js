import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import './App.scss'

function Layout(){
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products/:id',
          element: <Products />
        },
        {
          path: 'products/:id/product/:id',
          element: <Product />
        },
        {
          path: 'product/:id',
          element: <Product />
        }
      ]
    }
  ])
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
}


