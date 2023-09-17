import { createSlice } from "@reduxjs/toolkit";
import { storage } from "helpers/storage";

export interface AuthContext {
	auth?: { userName: string };
}

const initialState: AuthContext = {
	auth: storage.get("auth"),
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state: AuthContext, { payload }: { payload: { userName: string } }) => {
			state.auth = payload;
			storage.set("auth", payload);
		},
		logout: (state: AuthContext) => {
			state.auth = undefined;
			storage.clear("auth");
		},
	},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
