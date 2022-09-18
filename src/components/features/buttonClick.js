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
    getMouseClickReference: (state, action) => {
      console.log(action.payload);
      if (action.payload === "container_home_main") {
        state.signinClick = false;
        state.signupClick = false;
      }
    },
  },
});

export const {
  chagneSigninStatus,
  chagneSignupStatus,
  changeQuestionNameAndTitleButtonClickedStatus,
  getMouseClickReference,
} = buttonClick.actions;

export default buttonClick.reducer;
