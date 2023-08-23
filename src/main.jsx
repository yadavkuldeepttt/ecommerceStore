import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store.jsx";
import { StateProvider } from "./Store/AuthContext/authContext.jsx";
import reducer, { initialState } from "./Store/AuthContext/reducer.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StateProvider>
);
