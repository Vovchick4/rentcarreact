import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Redirect, Route } from 'react-router';

import { Layout } from '../';

import routes from '../../config/routes';
import urls from '../../config/urls';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const persistedLanguage = localStorage.getItem('language');
    if (!persistedLanguage) return;

    i18n.changeLanguage(persistedLanguage);
  }, [i18n]);

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
