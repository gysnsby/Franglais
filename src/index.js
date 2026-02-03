import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ---- GA helper ----
function track(event, params = {}) {
  if (window.gtag) {
    window.gtag("event", event, params);
  }
}

// ---- Detect PWA vs Browser ----
const isPWA =
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

track("app_open", {
  app_context: isPWA ? "pwa" : "browser",
});

// ---- Render app ----
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
