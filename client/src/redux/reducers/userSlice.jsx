import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

//eslint-disable-next-line
const GuestUser = {
  pk: 0,
  username: "Guest",
  email: "guest@localhost",
  name: "Guest",
  user_type: "GUEST",
  verified: false,
};

const initialState = {
  user: GuestUser,
  access_token: "",
  refresh_token: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      const decoded = jwtDecode(action.payload.access);
      console.log(decoded.isVerified);
      state.user = {
        pk: decoded.user_id,
        username: decoded.username,
        email: decoded.email,
        name: decoded.name,
        user_type: decoded.user_type,
        verified: decoded.isVerified,
      };
      state.access_token = action.payload.access;
      state.refresh_token = action.payload.refresh;
      state.isLoggedIn = true;
    },
    logout: () => initialState,
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
