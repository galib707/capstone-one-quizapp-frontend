import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTitleView: "",
  quizTopicView: "",
  questionArr: [],
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
    storeQuestionLocally: (state, action) => {
      console.log(action.payload);
      if (action.payload.type === "multiple") {
        const {
          question,
          picked,
          quizId,
          type,
          choiceOne,
          choiceTwo,
          choiceThree,
          choiceFour,
        } = action.payload;

        let obj = {
          question: question,
          correctAns: picked,
          choices: [choiceOne, choiceTwo, choiceThree, choiceFour],
          quizId: quizId,
          type: type,
        };
        state.questionArr.push(obj);
      } else {
        const { question, picked, quizId, type } = action.payload;

        let obj = {
          question: question,
          correctAns: picked,
          choices: ["True", "False"],
          quizId: quizId,
          type: type,
        };
        state.questionArr.push(obj);
      }
    },
  },
});

export const {
  getTitleForQuizView,
  getTopicForQuizView,
  storeQuestionLocally,
} = quizViewReducer.actions;

export default quizViewReducer.reducer;
