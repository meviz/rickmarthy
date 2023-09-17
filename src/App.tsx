import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute";
import { AppLayout } from "components/AppLayout";
import { Login } from "pages/Login";
import { Detail } from "pages/Detail";
import { List } from "pages/List";
import { PageNotFound } from "pages/PageNotFound";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route element={<AppLayout />}>
					<Route
						path="/"
						element={
							<PrivateRoute>
								<List />
							</PrivateRoute>
						}
					/>
					<Route
						path="/detail/:episodeId"
						element={
							<PrivateRoute>
								<Detail />
							</PrivateRoute>
						}
					/>
					<Route
						path="/*"
						element={
							<PrivateRoute>
								<PageNotFound />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
