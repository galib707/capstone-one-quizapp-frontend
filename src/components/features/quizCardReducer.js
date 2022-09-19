import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const deleteQuizById = createAsyncThunk(
  "quiz/deleteQuizById",
  async (credentials) => {
    console.log("inside delete quiz thunk");
    let sendSigninCredentials = await fetch(
      `http://localhost:8000/quiz/delete/${credentials}`,
      {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(credentials),
        mode: "cors",
      }
    );
  }
);
const createQuiz = createAsyncThunk("quiz/createQuiz", async (credentials) => {
  console.log("inside createQuiz thunk", credentials);

  let sendSigninCredentials = await fetch(`http://localhost:8000/quiz/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    mode: "cors",
  });
});
const initialState = {
  quizDeleted: false,
  quizCreated: false,
  quizId: "",
};

const quizCardReducer = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(deleteQuizById.pending, (state, action) => {
      console.log("delete quiz pending");
    });
    builders.addCase(deleteQuizById.rejected, (state, action) => {
      console.log("delete quiz rejected");
    });
    builders.addCase(deleteQuizById.fulfilled, (state, action) => {
      console.log("delete quiz fulfilled");
      state.quizDeleted = true;
    });
    builders.addCase(createQuiz.pending, (state, action) => {
      console.log("createQuiz is pending");
    });
    builders.addCase(createQuiz.rejected, (state, action) => {
      console.log("createQuiz is rejected");
    });
    builders.addCase(createQuiz.fulfilled, (state, action) => {
      console.log("createQuiz is fulfilled");
      state.quizCreated = true;
    });
  },
});

export const {} = quizCardReducer.actions;

export default quizCardReducer.reducer;

export { deleteQuizById, createQuiz };
