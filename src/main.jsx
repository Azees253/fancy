import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StorageContextProvider from "./context/StorageContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/fancy/">
    <StorageContextProvider>
      <App />
    </StorageContextProvider>
  </BrowserRouter>
);
