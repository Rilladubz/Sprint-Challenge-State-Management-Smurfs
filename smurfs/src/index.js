import React from "react";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import ReactDOM from "react-dom";
import "./index.css";

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
