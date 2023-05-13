import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/globals.scss";
import Home from "./components/screens/Home/Home";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
