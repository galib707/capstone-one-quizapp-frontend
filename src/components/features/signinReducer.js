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

    let respose = await sendSigninCredentials.json();
    console.log(respose);
  }
);
const initialState = {
  isSignedIn: false,
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
      state.isSignedIn = true;
      console.log("user signin fulfilled");
    });
  },
});

export const { changeSigninStatus } = signinReducer.actions;

export default signinReducer.reducer;

export { userSignin };
