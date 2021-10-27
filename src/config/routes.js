import { lazy } from "react";

import urls from "./urls";

const routes = [
  {
    path: urls.notFound,
    exact: true,
    component: lazy(() => import("../pages/NotFound")),
    private: false,
    restricted: false,
  },
  {
    path: urls.home,
    exact: true,
    component: lazy(() =>
      import("../pages/Home" /* webpackChunkName: 'SignUp' */)
    ),
    private: false,
    restricted: false,
  },
];

export default routes;
