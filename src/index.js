import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore } from "./store/configureStore";

import "@clayui/css/lib/css/base.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
