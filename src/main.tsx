import React from "react";
import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom/client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from "./App.tsx";
import "./index.css";

AOS.init(); // Inciializa AOS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
