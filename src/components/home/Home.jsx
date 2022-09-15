import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/6 h-full flex flex-col justify-center items-center border border-gray-600">
        <div className="w-96  border border-gray-500">
          <Outlet />
          <div className="w-full h-1/5 flex justify-between items-center p-3 ">
            <div className="">
              {" "}
              <Link to="/"> SignIn </Link>
            </div>
            <div className="">
              <Link to="signup">SignUp </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
