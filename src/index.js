import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/route/Main";
import "./index.css";
import { store } from "./store";
import { io } from "socket.io-client";
const socket = io("http://localhost:8000/");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>
);

export { socket };
