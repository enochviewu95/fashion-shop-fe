import { createBrowserRouter, redirect } from 'react-router-dom';

import App from './App';
import Client from './routes/Client';
import Admin from './routes/Admin';
import HomepageView from './views/HomepageView';
import AboutUsView from './views/AboutUsView';
import ContactUsView from './views/ContactUsView';
import PageNotFound from './views/PageNotFound';
import Registration from './routes/Registration';



export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Client />,
        children: [
          {
            path: '/',
            element: <HomepageView />,
          },
          {
            path: '/about-us',
            element: <AboutUsView />
          },
          {
            path: '/contact-us',
            element: <ContactUsView />
          },
          {
            path: '/fashion-shop-fe',
            element:<HomepageView/>
          }
        ]
      },
      {
        path: '/admin',
        element: <Admin />,
        errorElement: <PageNotFound />
      },
      {
        path: '/register',
        element: <Registration />,
        errorElement: <PageNotFound />
      }
    ]
  }
])