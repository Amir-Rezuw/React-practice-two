import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalContextProvider } from "./UI/Context/CartModal.ctx.tsx";
import { CartContextProvider } from "./UI/Context/Cart.ctx.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { reactQueryConfig } from "./Configs/React-query.ts";
const queryClient = new QueryClient(reactQueryConfig);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ModalContextProvider>
      <CartContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartContextProvider>
    </ModalContextProvider>
  </QueryClientProvider>
);
