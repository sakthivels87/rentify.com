"use client";
import { Provider } from "react-redux";
import store from "../store";
import { AuthProvider } from "../context/AuthContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";
import { ThemeProvider } from "../context/ThemeContext";
import ToastProvider from "./ToastProvider";

export default function Providers({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <ToastProvider>{children}</ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}
