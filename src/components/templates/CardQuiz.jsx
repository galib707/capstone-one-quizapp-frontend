import React from "react";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import Choices from "./Choices";
function CardQuiz() {
  return (
    <div className="card">
      <div className="card-image">Math</div>
      <div className="card-description">
        <div className="heading">
          {" "}
          Qestion: how much is 2+2 = ?
          <div className="options_for_multiple_choice">
            {/* <p>
              <span className="name">A.</span> 4
            </p>
            <p>
              <span className="name">B.</span> 5
            </p>
            <p>
              <span className="name">C.</span> c
            </p>
            <p>
              <span className="name">D.</span> d
            </p> */}
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
