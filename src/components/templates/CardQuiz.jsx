import React from "react";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import Choices from "./Choices";
function CardQuiz() {
  return (
    <div className="question_card">
      <div className="question_card_image">Math</div>
      <div className="question_card-description">
        <div className="heading">
          {" "}
          Qestion: how much is 2+2 = ?
          <div className="options_for_multiple_choice">
            <Choices />
          </div>
          <div className="correct_answer">
            <p>
              <span className="name">Correct ans: </span>
              <span className="correct_answer_text_decoration">d</span>
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
