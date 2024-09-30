import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";
import { CoffeeProvider } from "./context/CoffeeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoffeeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CoffeeProvider>
  </StrictMode>
);
