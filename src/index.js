import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'normalize.css';
import './styles/variebles.css';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toast.css';
import './config/axios';
import './config/i18n';

import { App } from './components';

ReactDOM.render(
  <BrowserRouter>
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
  </BrowserRouter>,
  document.getElementById('root')
);
