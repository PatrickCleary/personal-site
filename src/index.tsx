import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WindowContextProvider } from "./WindowContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WindowContextProvider>
      <App />
    </WindowContextProvider>
  </React.StrictMode>
);
