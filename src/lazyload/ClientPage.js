import { lazy } from "react";

export const ClientAboutUs = lazy(() => import("../views/Client/AboutUsView"));
export const ClientContactUs = lazy(() =>
  import("../views/Client/ContactUsView")
);
export const ClientDetails = lazy(() => import("../views/Client/DetailsView"));
export const ClientHomepage = lazy(() =>
  import("../views/Client/HomepageView")
);
export const ClientProductList = lazy(() =>
  import("../views/Client/ProductListView")
);
