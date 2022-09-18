import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getMouseClickReference } from "../features/buttonClick";
import Navbar from "../navbar/Navbar";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import "./styles.css";

function Home() {
  const button = useSelector((state) => state.button);
  const dispatch = useDispatch();

  return (
    <div
      className="container_home"
      onClick={(e) => dispatch(getMouseClickReference(e.target.className))}
    >
      <Navbar />
      <div className="container_home_main">
        <div
          className={`container_home_main_signin${
            button.signinClick === true ? " scale-up-center" : ""
          }`}
        >
          {button.signinClick && <Signin />}
        </div>
        <div
          className={`container_home_main_signin${
            button.signupClick === true ? " scale-up-center" : ""
          }`}
        >
          {button.signupClick && <Signup />}
        </div>
      </div>
      <div
        className={`area${
          button.signinClick === true || button.signupClick === true
            ? " area_display_off"
            : " area_display_on"
        }`}
      >
        <ul
          className={`circles${
            button.signinClick === true || button.signupClick === true
              ? " area_display_off"
              : " area_display_on"
          }`}
        >
          <li>
            <img src="./einstein.png" alt="" />
          </li>
          <li>42</li>
          <li>?</li>
          <li>i</li>
          <li></li>
          <li>pi</li>
          <li>?</li>
          <li>?</li>
          <li>
            <img src="./einstein.png" alt="" />
          </li>
          <li>
            <img src="./einstein.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
