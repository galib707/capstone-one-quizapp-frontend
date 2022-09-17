import React from "react";

function CheckBadge() {
  return (
    <div className="w-[30px] h-[30px] flex flex-col justify-center items-center border border-gray-500 rounded-full relative">
      <div className="w-[30px] h-[30px] flex flex-col justify-center items-center border border-gray-500 rounded-full absolute">
        ✅
      </div>
    </div>
  );
}

export default CheckBadge;
