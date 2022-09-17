import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import "./styles.css";

function Home() {
  const button = useSelector((state) => state.button);
  return (
    <div className="container_home">
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
            ? " area_display"
            : ""
        }`}
      >
        <ul
          className={`circles${
            button.signinClick === true || button.signupClick === true
              ? " area_display"
              : ""
          }`}
        >
          <li>A</li>
          <li>42</li>
          <li>?</li>
          <li>Q</li>
          <li>≅</li>
          <li>pi</li>
          <li>i</li>
          <li>e</li>
          <li>+</li>
          <li>∑</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
