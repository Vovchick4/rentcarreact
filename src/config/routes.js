import { lazy } from "react";

import urls from "./urls";

const routes = [
  {
    path: urls.notFound,
    exact: true,
    component: lazy(() =>
      import("../pages/NotFound" /* webpackChunkName: 'NotFound' */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: urls.home,
    exact: true,
    component: lazy(() =>
      import("../pages/Home" /* webpackChunkName: 'Home' */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: urls.profile,
    exact: true,
    component: lazy(() =>
      import("../pages/Profile" /* webpackChunkName: 'Profile' */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: urls.buyBoost,
    exact: true,
    component: lazy(() =>
      import("../pages/Buyboost" /* webpackChunkName: 'Buyboost' */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: urls.accountTrading,
    exact: true,
    component: lazy(() =>
      import("../pages/Accounttrading" /* webpackChunkName: 'Accounttrading' */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: urls.coaching,
    exact: true,
    component: lazy(() =>
      import("../pages/Coaching" /* webpackChunkName: 'Coaching' */)
    ),
    private: false,
    restricted: false,
  },
];

export default routes;
