import React from "react";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import Choices from "./Choices";
function CardQuiz(props) {
  console.log(props);
  let letterMap = { 1: "A", 2: "B", 3: "C", 4: "D" };
  return (
    <div className="question_card">
      <div className="question_card_image">Math</div>
      <div className="question_card-description">
        <div className="heading">
          Q : {props.question.question}
          <div className="options_for_multiple_choice">
            {props.question.choices.length !== 0 &&
              props.question.choices.map((choice, index) => (
                <Choices choice={choice} index={index} />
              ))}
          </div>
          <div className="correct_answer">
            <p>
              <span className="name">Correct ans: </span>
              <span className="correct_answer_text_decoration">
                {props.question.type === "multiple"
                  ? letterMap[props.question.correctAns]
                  : props.question.correctAns}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="edit_delete_icon">
        <p className="edit_icon">
          {" "}
          <TiEdit />
        </p>
        <p className="delete_icon">
          <TiDeleteOutline />
        </p>
      </div>
    </div>
  );
}

export default CardQuiz;
