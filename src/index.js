import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import 'normalize.css';
import './styles/variebles.css';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toast.css';
import './config/axios';
import './config/i18n';

import { store, persistor } from './redux/store';
import { App } from './components';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
