import React from "react";
import { Route, Routes } from "react-router-dom";
import History from "../history/History";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import BinaryChoice from "../templates/BinaryChoice";
import MultipleChoice from "../templates/MultipleChoice";
import Quiz from "../templates/Quiz";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route index element={<History />} />
          <Route path="templates" element={<Quiz />}>
            <Route index element={<BinaryChoice />} />
            <Route path="multiple" element={<MultipleChoice />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default Main;
