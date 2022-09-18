import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./components/features/signupReducer";
import signinReducer from "./components/features/signinReducer";
import buttonClick from "./components/features/buttonClick";
import quizViewReducer from "./components/features/quizViewReducer";
import quizCardReducer from "./components/features/quizCardReducer";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    button: buttonClick,
    quizView: quizViewReducer,
    quiz: quizCardReducer,
  },
});
