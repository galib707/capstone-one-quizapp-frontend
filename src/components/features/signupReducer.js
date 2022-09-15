import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSignup = createAsyncThunk(
  "signup/userSignup",
  async (credentials) => {
    console.log("inside user signup thunk", credentials);

    let sendSignupCredentials = await fetch(
      "http://localhost:8000/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    console.log(sendSignupCredentials);
  }
);

const initialState = {};

const signupReducer = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(userSignup.pending, (state, action) => {
      console.log("user signup pending");
    });
    builders.addCase(userSignup.rejected, (state, action) => {
      console.log("user signup rejected");
    });
    builders.addCase(userSignup.fulfilled, (state, action) => {
      console.log("user signup fulfilled");
    });
  },
});

export const {} = signupReducer.actions;

export default signupReducer.reducer;

export { userSignup };
