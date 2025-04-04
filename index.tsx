import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/app/App";
import "@/app/providers/i18n";
import "@/shared/components/styles/globals.scss";
import store from "@/app/providers/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/app/providers/i18n";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root container not found in index.html");
}
