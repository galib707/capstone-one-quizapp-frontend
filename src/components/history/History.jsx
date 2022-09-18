import React from "react";
import { useSelector } from "react-redux";
import Add from "./Add";
import CardExam from "./CardExam";
import "./styles.css";

function History() {
  const signin = useSelector((state) => state.signin);

  return (
    <div className="history_container">
      <Add />
      {signin.quizzes !== null &&
        signin.quizzes.map((quiz) => (
          <CardExam quiz={quiz} name={signin.userName} />
        ))}
    </div>
  );
}

export default History;
