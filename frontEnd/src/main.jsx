import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.jsx";
import { GlobalStyles } from "./GlobalStyles.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
);
