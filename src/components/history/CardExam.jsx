import React from "react";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuizById } from "../features/quizCardReducer";

function CardExam(props) {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  console.log(quiz.quizDeleted);
  return (
    <>
      <div
        className="card"
        style={
          quiz.quizDeleted === true ? { display: "none" } : { display: "flex" }
        }
      >
        <div className="card-image">{props.quiz.title}</div>
        <div className="card-description">
          <div className="category"> {props.quiz.title}</div>
          <div className="heading">
            {props.quiz.topic}
            <div className="author">
              {" "}
              By <span className="name">{props.name}</span>, Date :
              {props.quiz.updatedAt.split("T")[0]}
            </div>
          </div>
        </div>
        <div className="edit_delete_icon">
          <p className="edit_icon">
            {" "}
            <TiEdit />
          </p>
          <p className="delete_icon">
            <TiDeleteOutline
              onClick={() => dispatch(deleteQuizById(props.quiz._id))}
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default CardExam;
