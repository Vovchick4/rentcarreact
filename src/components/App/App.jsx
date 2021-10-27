import { Switch, Redirect, Route } from "react-router";

import { Layout } from "../";

import routes from "../../config/routes";
import urls from "../../config/urls";

export default function App() {
  return (
    <Layout>
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque est nulla, deserunt repudiandae expedita porro aliquid, omnis rerum hic id ab sunt adipisci minima similique maxime! Eius, eos alias! */}
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
