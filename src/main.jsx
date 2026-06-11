import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from './context/AuthContext.jsx';
import {
	CartProvider
}
from "./context/CartContext";
const queryClient =
    new QueryClient();

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <AuthProvider>

		<CartProvider>

			<QueryClientProvider
				client={queryClient}>

			<App />

		</QueryClientProvider>
		</CartProvider>

	</AuthProvider>
);