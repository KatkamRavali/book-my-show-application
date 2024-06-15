import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ------- Browser Router import --------
import { BrowserRouter } from "react-router-dom";

// ------- Import Movie Provider ---------
import MovieProvider from "./Context/Movie.Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
