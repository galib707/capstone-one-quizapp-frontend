import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signinClick: false,
  signupClick: false,
  questionNameAndTitleButtonClicked: false,
};

const buttonClick = createSlice({
  name: "button",
  initialState,
  reducers: {
    chagneSigninStatus: (state) => {
      state.signinClick = true;
      state.signupClick = false;
    },
    chagneSignupStatus: (state) => {
      state.signinClick = false;
      state.signupClick = true;
    },
    changeQuestionNameAndTitleButtonClickedStatus: (state) => {
      state.questionNameAndTitleButtonClicked = true;
    },
  },
});

export const {
  chagneSigninStatus,
  chagneSignupStatus,
  changeQuestionNameAndTitleButtonClickedStatus,
} = buttonClick.actions;

export default buttonClick.reducer;
