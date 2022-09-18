import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSignin = createAsyncThunk(
  "signin/userSignin",
  async (credentials) => {
    console.log("inside singin thunk");
    let sendSigninCredentials = await fetch(
      "http://localhost:8000/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    let response = await sendSigninCredentials.json();

    let userObj = {
      name: response.user_data.name,
      id: response.user_data._id,
      quizzes: response.user_data.quizzes,
    };

    return userObj;
  }
);
const initialState = {
  isSignedIn: false,
  user_id: "",
  userName: "",
  quizzes: [],
};

const signinReducer = createSlice({
  name: "signin",
  initialState,
  reducers: {
    changeSigninStatus: (state) => [(state.isSignedIn = false)],
  },
  extraReducers: (builders) => {
    builders.addCase(userSignin.pending, (state, action) => {
      console.log("user signin pending");
    });
    builders.addCase(userSignin.rejected, (state, action) => {
      console.log("user signin rejected");
    });
    builders.addCase(userSignin.fulfilled, (state, action) => {
      console.log("user signin fulfilled");
      state.isSignedIn = true;
      state.userName = action.payload.name;
      state.quizzes = action.payload.quizzes;
      state.user_id = action.payload.id;
    });
  },
});

export const { changeSigninStatus } = signinReducer.actions;

export default signinReducer.reducer;

export { userSignin };
