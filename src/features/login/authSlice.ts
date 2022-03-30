import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Token } from "./token";
import { getToken } from './token.api'
import { Credentials } from "./credentials";

export type TokenState = Token[];

const initialState: TokenState = [{
    token: ""
}]

export const authSlice = createSlice( {
    name: "auth",
    initialState: initialState,

    reducers: {
        logout: (state) =>
        {
          state[0] = initialState[0];
        },
        login: (state, action) => {
          state[0].token = action.payload;
        }
    }
});
export const { logout, login } = authSlice.actions;
export default authSlice.reducer;