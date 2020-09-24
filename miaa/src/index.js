import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import reduxPromise from "redux-promise";

const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
