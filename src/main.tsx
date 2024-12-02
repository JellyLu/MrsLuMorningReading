import "abortcontroller-polyfill/dist/polyfill-patch-fetch";
import "globalthis/auto";
import "polyfill-object.fromentries";
import "react-app-polyfill/stable";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from "./router";

const rootEl = document.getElementById("root")!;

ReactDOM.createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
