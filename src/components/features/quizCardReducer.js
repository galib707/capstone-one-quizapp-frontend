import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const deleteQuizById = createAsyncThunk(
  "quiz/deleteQuizById",
  async (credentials) => {
    console.log("inside delete quiz thunk");
    let sendSigninCredentials = await fetch(
      `http://localhost:8000/quiz/delete/${credentials}`,
      {
        method: "DELETE",
        mode: "cors",
      }
    );
    return credentials;
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
  let response = await sendSigninCredentials.json();
  console.log(response);
  return sendSigninCredentials;
});
const initialState = {
  deletedQuizIdArr: [],
  quizDeleted: false,
  quizCreated: false,
  quizId: "",
  deletedQuizId: "",
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
      state.deletedQuizIdArr.push(action.payload);
      state.quizDeleted = true;
      state.deletedQuizId = action.payload;
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
      state.quizId = action.payload;
    });
  },
});

export const {} = quizCardReducer.actions;

export default quizCardReducer.reducer;

export { deleteQuizById, createQuiz };
