import React from "react";
import "./styles.css";
import { FaPlus } from "react-icons/fa";
function Add() {
  return (
    <div className="add_quiz_button">
      <div className="plusicon_container">
        <FaPlus className="plus_icon" />
      </div>
    </div>
  );
}

export default Add;
