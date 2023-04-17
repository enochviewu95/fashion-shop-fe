import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Client from "./routes/Client";
import Admin from "./routes/Admin";

import HomepageView from "./views/Client/HomepageView";
import AboutUsView from "./views/Client/AboutUsView";
import ContactUsView from "./views/Client/ContactUsView";
import DashboardView from "./views/Admin/DashboardView";

import PageNotFound from "./views/PageNotFound";
import Registration from "./routes/Registration";
import Home from "./views/Admin/Home";
import AboutUs from "./views/Admin/AboutUs";
import ContactUs from "./views/Admin/ContactUs";

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
            path: "/fashion-shop-fe/admin/home",
            element: <Home pageTitle="Home" />,
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
        path: "/fashion-shop-fe/register",
        element: <Registration />,
        errorElement: <PageNotFound />,
      },
    ],
  },
]);
