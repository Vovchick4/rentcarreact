import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import "./styles/variebles.css";
import "./styles/index.css";

import { App } from "./components";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
