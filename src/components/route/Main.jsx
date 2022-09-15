import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default Main;
