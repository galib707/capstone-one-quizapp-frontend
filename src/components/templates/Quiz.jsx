import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiCelluloid } from "react-icons/di";
import {
  getTitleForQuizView,
  getTopicForQuizView,
} from "../features/quizViewReducer";
import "./styles.css";
function Quiz() {
  const dispatch = useDispatch();
  const quizView = useSelector((state) => state.quizView);
  return (
    <div className="quiz_container">
      <form className="form_container">
        <div className="question_container">
          <div className="qustion_title_and_topic">
            <label htmlFor="title">Quiz Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="question_title"
              placeholder="give quiz a name"
              onChange={(e) => dispatch(getTitleForQuizView(e.target.value))}
            />
            <label htmlFor="topic_name">Topic or Subject</label>
            <input
              type="text"
              id="title"
              name="topic"
              className="topic_title"
              placeholder="write down an topic name"
              onChange={(e) => dispatch(getTopicForQuizView(e.target.value))}
            />
          </div>
        </div>
      </form>
      <div className="quiz_view_container">
        <div className="quiz_view_title_and_topic">
          <div className="title_view">
            {quizView.quizTitleView.length !== 0 && <DiCelluloid />}
            <>{quizView.quizTitleView}</>
            {quizView.quizTitleView.length !== 0 && <DiCelluloid />}
          </div>
          <div className="topic_view">{quizView.quizTopicView}</div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
