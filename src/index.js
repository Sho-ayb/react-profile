// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// importing style sheet
import "./index.css";

import Header from "./Components/Header";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <App />
  </Router>
);
