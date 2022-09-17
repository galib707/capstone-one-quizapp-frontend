import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTitleView: "",
  quizTopicView: "",
};

const quizViewReducer = createSlice({
  name: "quizView",
  initialState,
  reducers: {
    getTitleForQuizView: (state, action) => {
      state.quizTitleView = action.payload;
    },
    getTopicForQuizView: (state, action) => {
      state.quizTopicView = action.payload;
    },
  },
});

export const { getTitleForQuizView, getTopicForQuizView } =
  quizViewReducer.actions;

export default quizViewReducer.reducer;
