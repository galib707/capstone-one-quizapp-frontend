import React from "react";
import CheckBadge from "./CheckBadge";
import CircularBadge from "./CircularBadge";

function BinaryChoice() {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <form
        action=""
        method="post"
        className=" w-full h-full flex flex-col  items-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          let data = new FormData(e.target);
        }}
      >
        <div className=" w-full h-3/6 flex flex-col justify-center items-center border border-gray-500">
          <div className="w-1/2 h-full border border-gray-500 flex flex-col justify-end items-center">
            <label for="name">upload an image file </label>
            <input
              type="file"
              id="product-image"
              name="image"
              accept="image/png, image/jpeg"
            />
          </div>
        </div>

        <div className="w-full h-1/6 border border-gray-500 flex flex-col">
          <label
            for="name"
            className="text-2xl h-1/2 flex flex-col justify-center"
          >
            Question title{" "}
          </label>
          <input
            type="text"
            name="title"
            id="name"
            placeholder="type question here"
            required
            className="border border-gray-400 h-1/2 pl-4"
          />
        </div>
        <div className="w-full h-1/6 border border-gray-500 flex">
          <div className="w-1/2 h-full border border-red-500 flex ">
            <div className="w-1/5 h-full flex justify-center items-center">
              <CircularBadge />
            </div>
            <div className="w-3/5 h-full flex justify-center items-center">
              <input
                type="text"
                name="choice1"
                id="name"
                placeholder="type question here"
                required
                className="border border-gray-400 w-full h-full pl-4"
              />
            </div>
            <div className="w-1/5 h-full flex justify-center items-center">
              <CheckBadge />
            </div>
          </div>
          <div className="w-1/2 h-full border border-red-500 flex">
            <div className="w-1/5 h-full flex justify-center items-center">
              <CircularBadge />
            </div>
            <div className="w-3/5 h-full flex justify-center items-center">
              <input
                type="text"
                name="choice1"
                id="name"
                placeholder="type question here"
                required
                className="border border-gray-400 w-full h-full pl-4"
              />
            </div>
            <div className="w-1/5 h-full flex justify-center items-center">
              <CheckBadge />
            </div>
          </div>
        </div>

        <div className="w-full h-1/6 border border-gray-500 flex flex-col">
          <label
            for="name"
            className="text-2xl h-1/2 flex flex-col justify-center"
          >
            Correct Answer:
          </label>
          <input
            type="text"
            name="title"
            id="name"
            placeholder="type question here"
            required
            className="border border-gray-400 h-1/2 pl-4"
          />
        </div>

        <div className="w-full h-1/6 border border-gray-500 flex flex-col justify-center items-center">
          <button
            type="submit"
            className="w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BinaryChoice;
