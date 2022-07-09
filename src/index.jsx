/* eslint-disable no-underscore-dangle */
/* eslint-disable jest/require-hook */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { videosReducer } from "./reducers";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  videosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
