import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

export interface UserState {
  id?: string;
  email?: string;
  name?: string;
  username?: string;
  avatar?: string;
  role?: string;
  exp?: number;
  iat?: number;
}

const initialState: { user: UserState | null } = {
  user: null,
};

if (localStorage.getItem("token")) {
  const token = localStorage.getItem("token") || null;
  const decodedToken: any = token ? jwtDecode(token) : null;
  if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
  } else {
    initialState.user = decodedToken;
  }
}

export const userSlice = createSlice({
  name: "userCredentials",
  initialState,
  reducers: {
    loginOrRegister: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.user = jwtDecode(action.payload.token);
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
    },
  },
});

export const { loginOrRegister, logout } = userSlice.actions;

export default userSlice.reducer;
