import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  chagneSigninStatus,
  chagneSignupStatus,
} from "../features/buttonClick";
import "./styles.css";
function Navbar() {
  const goTo = useNavigate();
  const dispatch = useDispatch();
  const signin = useSelector((state) => state.signin);
  return (
    <div className="navbar">
      <div className="logo-container">
        <p className="logo"> Quiz!!</p>
      </div>
      {/* mid section div */}
      <div className=" w-9/12 h-full flex flex-col justify-center items-center">
        {signin.isSignedIn === true && (
          <div className=" flex">
            <p
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={() => goTo("quiz")}
            >
              Create
            </p>
            <p className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Reports
            </p>
          </div>
        )}
      </div>
      {signin.isSignedIn === false && (
        <div
          className="signin_button"
          onClick={() => dispatch(chagneSigninStatus())}
        >
          <p className="signin_button_text">Signin</p>
        </div>
      )}
      <div
        className="signout_button"
        onClick={() => dispatch(chagneSignupStatus())}
      >
        <p className="signout_button_text">
          {signin.isSignedIn === false ? "Sign Up" : "Sign Out"}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
