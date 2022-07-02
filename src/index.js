import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";
import UI from "./components/UI/UI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
    <UI/>
  </Provider>
);
