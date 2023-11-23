"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store, { persiststore } from "@/config/redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        <Provider store={Store}>
          <PersistGate loading={null} persistor={persiststore}>
            <ToastContainer
              autoClose={2000}
              position='top-right'
              pauseOnHover={false}
              theme='light'
              pauseOnFocusLoss={false}
            />
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
