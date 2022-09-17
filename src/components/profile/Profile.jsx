import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Profile() {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Profile;
