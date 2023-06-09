import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Client from "./layouts/Client";
import Admin from "./layouts/Admin";

import HomepageView from "./views/Client/HomepageView";
import AboutUsView from "./views/Client/AboutUsView";
import ContactUsView from "./views/Client/ContactUsView";
import DashboardView from "./views/Admin/DashboardView";

import PageNotFound from "./views/PageNotFound";
import Login from "./views/Authentications/Login"
import AboutUs from "./views/Admin/AboutUs";
import ContactUs from "./views/Admin/ContactUs";
import Hero from "./views/Admin/Hero";
import Products from "./views/Admin/Products";
import Categories from "./views/Admin/Categories";
import Collections from "./views/Admin/Collections";
import AddHero from "./views/Admin/AddHero";
import AddCategory from "./views/Admin/AddCategory";
import AddCollection from "./views/Admin/AddCollection";
import AddProduct from "./views/Admin/AddProduct";
import Authentications from "./layouts/Authentications";
import Signup from "./views/Authentications/Signup";
import ResetPassword from "./views/Authentications/ResetPassword";
import PasswordReset from "./views/Authentications/PasswordReset";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Client />,
        children: [
          {
            path: "/",
            element: <HomepageView />,
          },
        ],
      },
      {
        path: "/fashion-shop-fe",
        element: <Client />,
        children: [
          {
            path: "/fashion-shop-fe",
            element: <HomepageView />,
          },
          {
            path: "/fashion-shop-fe/about-us",
            element: <AboutUsView />,
          },
          {
            path: "/fashion-shop-fe/contact-us",
            element: <ContactUsView />,
          },
        ],
      },
      {
        path: "/fashion-shop-fe/admin",
        element: <Admin />,
        errorElement: <PageNotFound />,
        children: [
          {
            path: "/fashion-shop-fe/admin/",
            element: <DashboardView pageTitle="Dashboard" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/hero",
            element: <Hero pageTitle="Hero" isAdmin="true" />,
            
          },
          {
            path: "/fashion-shop-fe/admin/home/hero/add-hero",
            element: <AddHero pageTitle="Hero" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/hero/edit-hero/:id",
            element: <AddHero pageTitle="Hero" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/products",
            element: <Products pageTitle="Products" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/products/add-product",
            element: <AddProduct pageTitle="Products" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/products/edit-product/:id",
            element: <AddProduct pageTitle="Products" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/categories",
            element: <Categories pageTitle="Categories" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/categories/add-category",
            element: <AddCategory pageTitle="Categories" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/categories/edit-category/:id",
            element: <AddCategory pageTitle="Categories" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/collections",
            element: <Collections pageTitle="Collections" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/collections/add-collection",
            element: <AddCollection pageTitle="Collections" />,
          },
          {
            path: "/fashion-shop-fe/admin/home/collections/edit-collection/:id",
            element: <AddCollection pageTitle="Collections" />,
          },
          {
            path: "/fashion-shop-fe/admin/about-us",
            element: <AboutUs pageTitle="About Us" />,
          },
          {
            path: "/fashion-shop-fe/admin/contact-us",
            element: <ContactUs pageTitle="Contact Us" />,
          },
        ],
      },
      {
        path: "/fashion-shop-fe/auth",
        element: <Authentications />,
        errorElement: <PageNotFound />,
        children:[
          {
            path: "/fashion-shop-fe/auth/",
            element:<Login/>
          },
          {
            path: "/fashion-shop-fe/auth/signup",
            element: <Signup />,
          },
          {
            path:"/fashion-shop-fe/auth/forgot-password",
            element: <ResetPassword/>
          },
          {
            path:"/fashion-shop-fe/auth/reset/",
            element: <PasswordReset/>
          }
        ]
      },
      {
        path:"/fashion-shop-fe/pagenotfound",
        element: <PageNotFound/>
      }
    ],
  },
]);
