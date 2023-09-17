import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { store } from "contexts/store";
import "./index.css";
import { App } from "App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			cacheTime: 0,
			retry: 3,
			retryDelay: 3000,
		},
	},
});

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ConfigProvider>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</ConfigProvider>
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
);
