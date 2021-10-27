import { Switch, Redirect, Route } from "react-router";

import { Layout } from "../";

import routes from "../../config/routes";
import urls from "../../config/urls";

export default function App() {
  return (
    <Layout>
      <Switch>
        {routes.map(({ component: Component, path, ...route }) => (
          <Route key={path} path={path} {...route}>
            <Component />
          </Route>
        ))}

        <Redirect to={urls.notFound} />
      </Switch>
    </Layout>
  );
}
