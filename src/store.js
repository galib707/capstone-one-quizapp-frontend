import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./components/features/signupReducer";
import signinReducer from "./components/features/signinReducer";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
  },
});
