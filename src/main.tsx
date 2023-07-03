import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalContextProvider } from "./UI/Context/CartModal.ctx.tsx";
import { CartContextProvider } from "./UI/Context/Cart.ctx.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ModalContextProvider>
    <CartContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartContextProvider>
  </ModalContextProvider>
);
