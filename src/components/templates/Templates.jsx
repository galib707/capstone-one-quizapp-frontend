import React from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";

function Templates() {
  const goTo = useNavigate();
  return (
    <div className="w-full h-[90%] flex">
      <div className=" w-2/12 h-full flex flex-col gap-5 border border-gray-400">
        <p
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4 "
          onClick={() => goTo("/profile/templates")}
        >
          true/false
        </p>
        <p
          className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          onClick={() => goTo("multiple")}
        >
          multiple choice
        </p>
      </div>
      <div className=" w-10/12 h-full border border-gray-400">
        <Outlet />
      </div>
    </div>
  );
}

export default Templates;
