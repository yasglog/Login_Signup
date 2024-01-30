import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppContextProvider from "./context/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
  </AppContextProvider>
    

);
