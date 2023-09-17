import { useAppSelector } from "hooks/storeHooks";
import React from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./index.types";

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
	const auth = useAppSelector((state) => state.auth.auth);

	if (!auth) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};
