import React from "react";
import ReactDOM from "react-dom";

import "material-design-icons/iconfont/material-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);
const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
