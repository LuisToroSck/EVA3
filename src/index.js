import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./context/Dataprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DataProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </DataProvider>
);
