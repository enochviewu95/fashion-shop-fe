import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Client from "./layouts/Client";
import Admin from "./layouts/Admin";

import DashboardView from "./views/Admin/DashboardView";

import PageNotFound from "./views/PageNotFound";
import Hero from "./views/Admin/Hero";
import Products from "./views/Admin/Products";
import Categories from "./views/Admin/Categories";
import Collections from "./views/Admin/Collections";
import AddHero from "./views/Admin/AddHero";
import AddCategory from "./views/Admin/AddCategory";
import AddCollection from "./views/Admin/AddCollection";
import AddProduct from "./views/Admin/AddProduct";
import Authentications from "./layouts/Authentications";
import { SuspenseSection } from "./lazyload/SuspenseSection";
import {
  ClientAboutUs,
  ClientContactUs,
  ClientDetails,
  ClientFavorite,
  ClientHomepage,
  ClientProductList,
} from "./lazyload/ClientPage";
import {
  AuthLogin,
  AuthPasswordReset,
  AuthResetPassword,
  AuthSignup,
} from "./lazyload/AuthPage";

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
            element: (
              <SuspenseSection>
                <ClientHomepage />
              </SuspenseSection>
            ),
          },
          {
            path: "/about-us",
            element: (
              <SuspenseSection>
                <ClientAboutUs />
              </SuspenseSection>
            ),
          },
          {
            path: "/contact-us",
            element: (
              <SuspenseSection>
                <ClientContactUs />
              </SuspenseSection>
            ),
          },
          {
            path: "/favorites",
            element: (
              <SuspenseSection>
                <ClientFavorite/>
              </SuspenseSection>
            ),
          },
          {
            path: "/details/:id",
            element: (
              <SuspenseSection>
                <ClientDetails />
              </SuspenseSection>
            ),
          },
          {
            path: "/list/:id",
            element: (
              <SuspenseSection>
                <ClientProductList />
              </SuspenseSection>
            ),
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
            element: (
              <SuspenseSection>
                <DashboardView />
              </SuspenseSection>
            ),
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
        ],
      },
      {
        path: "/auth",
        element: <Authentications />,
        errorElement: <PageNotFound />,
        children: [
          {
            path: "/auth/",
            element: (
              <SuspenseSection>
                <AuthLogin />
              </SuspenseSection>
            ),
          },
          {
            path: "/auth/signup",
            element: (
              <SuspenseSection>
                <AuthSignup />
              </SuspenseSection>
            ),
          },
          {
            path: "/auth/forgot-password",
            element: (
              <SuspenseSection>
                <AuthResetPassword />
              </SuspenseSection>
            ),
          },
          {
            path: "/auth/reset/",
            element: (
              <SuspenseSection>
                <AuthPasswordReset />
              </SuspenseSection>
            ),
          },
        ],
      },
      {
        path: "/pagenotfound",
        element: <PageNotFound />,
      },
    ],
  },
]);
