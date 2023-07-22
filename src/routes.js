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
import DetailsView from "./views/Client/DetailsView";
import ProductListView from "./views/Client/ProductListView";

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
          {
            path: "/about-us",
            element: <AboutUsView />,
          },
          {
            path: "/contact-us",
            element: <ContactUsView />,
          },
          {
            path:"/details/:id",
            element: <DetailsView/>
          },
          {
            path:"/list/:type",
            element: <ProductListView/>
          },
        ],
      },
      {
        path: "/admin",
        element: <Admin />,
        errorElement: <PageNotFound />,
        children: [
          {
            path: "/admin/",
            element: <DashboardView pageTitle="Dashboard" />,
          },
          {
            path: "/admin/home/hero",
            element: <Hero pageTitle="Hero" isAdmin="true" />,
            
          },
          {
            path: "/admin/home/hero/add-hero",
            element: <AddHero pageTitle="Hero" />,
          },
          {
            path: "/admin/home/hero/edit-hero/:id",
            element: <AddHero pageTitle="Hero" />,
          },
          {
            path: "/admin/home/products",
            element: <Products pageTitle="Products" />,
          },
          {
            path: "/admin/home/products/add-product",
            element: <AddProduct pageTitle="Products" />,
          },
          {
            path: "/admin/home/products/edit-product/:id",
            element: <AddProduct pageTitle="Products" />,
          },
          {
            path: "/admin/home/categories",
            element: <Categories pageTitle="Categories" />,
          },
          {
            path: "/admin/home/categories/add-category",
            element: <AddCategory pageTitle="Categories" />,
          },
          {
            path: "/admin/home/categories/edit-category/:id",
            element: <AddCategory pageTitle="Categories" />,
          },
          {
            path: "/admin/home/collections",
            element: <Collections pageTitle="Collections" />,
          },
          {
            path: "/admin/home/collections/add-collection",
            element: <AddCollection pageTitle="Collections" />,
          },
          {
            path: "/admin/home/collections/edit-collection/:id",
            element: <AddCollection pageTitle="Collections" />,
          },
          {
            path: "/admin/about-us",
            element: <AboutUs pageTitle="About Us" />,
          },
          {
            path: "/admin/contact-us",
            element: <ContactUs pageTitle="Contact Us" />,
          },
        ],
      },
      {
        path: "/auth",
        element: <Authentications />,
        errorElement: <PageNotFound />,
        children:[
          {
            path: "/auth/",
            element:<Login/>
          },
          {
            path: "/auth/signup",
            element: <Signup />,
          },
          {
            path:"/auth/forgot-password",
            element: <ResetPassword/>
          },
          {
            path:"/auth/reset/",
            element: <PasswordReset/>
          }
        ]
      },
      {
        path:"/pagenotfound",
        element: <PageNotFound/>
      }
    ],
  },
]);
