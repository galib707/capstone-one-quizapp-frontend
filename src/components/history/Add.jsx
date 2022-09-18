import React from "react";
import "./styles.css";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Add() {
  const goTo = useNavigate();
  return (
    <div className="add_quiz_button">
      <div className="plusicon_container" onClick={() => goTo("quiz")}>
        <FaPlus className="plus_icon" />
      </div>
    </div>
  );
}

export default Add;
