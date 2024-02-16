import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import "./index.scss";
import "./i18n/config.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router.tsx";
import { queryClient } from "./service/api.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <SnackbarProvider
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      variant="success"
    />
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.Fragment>
);
