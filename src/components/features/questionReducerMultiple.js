import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const setQuestion = createAsyncThunk(
  "question/setQuestion",
  async (credentials) => {
    console.log("inside set question thunk");
    let sendQuestion = await fetch(
      `http://localhost:8000/quiz/delete/${credentials}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    let response = await sendQuestion.json();
    console.log(response);
  }
);
const initialState = {
 
};

const questionReducerMultiple = createSlice({
  name: "question",
  initialState,
  reducers: {
   
  },
  extraReducers: (builders) => {
    builders.addCase(setQuestion.pending, (state, action) => {
      console.log("set question pending");
    });
    builders.addCase(setQuestion.rejected, (state, action) => {
      console.log("set question rejected");
    });
    builders.addCase(setQuestion.fulfilled, (state, action) => {
      console.log("set question fulfilled");
      state.quizDeleted = true;
    });
  },
});

export const {} = questionReducerMultiple.actions;

export default questionReducerMultiple.reducer;
