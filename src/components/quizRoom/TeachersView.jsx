import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardQuiz from "../templates/CardQuiz";
import { io } from "socket.io-client";
function TeachersView() {
  const quizView = useSelector((state) => state.quizView);
  let questionsArr = quizView.questionArr;
  console.log(questionsArr);
  let [question, setQuestion] = useState(null);
  let [currQuesID, setCurrQuestionId] = useState(0);

  const socket = io("http://localhost:8000/");

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
      socket.emit("create-room", "newIdForRoom");
      socket.on("next", () => {
        console.log("hello");
      });
    });
  }, [socket]);

  const handleClick = () => {
    setQuestion((curr) => questionsArr[currQuesID]);
    setCurrQuestionId((prev) => {
      if (prev === questionsArr.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  return (
    <div className="teachers_view_container">
      <button
        type="submit"
        className="title_submit_button"
        style={{ backgroundColor: "#504276" }}
        onClick={() => handleClick()}
      >
        Next
      </button>
      <div className="question_display">
        {question !== null && <CardQuiz question={question} />}
      </div>
    </div>
  );
}

export default TeachersView;
