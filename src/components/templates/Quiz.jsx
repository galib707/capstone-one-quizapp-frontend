import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiCelluloid } from "react-icons/di";
import {
  getTitleForQuizView,
  getTopicForQuizView,
} from "../features/quizViewReducer";
import "./styles.css";
import CardQuiz from "./CardQuiz";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Outlet, useNavigate } from "react-router-dom";
import { changeQuestionNameAndTitleButtonClickedStatus } from "../features/buttonClick";
import { createQuiz } from "../features/quizCardReducer";

// ######################################

function Quiz() {
  const dispatch = useDispatch();
  const quizView = useSelector((state) => state.quizView);
  const button = useSelector((state) => state.button);
  const quiz = useSelector((state) => state.quiz);
  const signin = useSelector((state) => state.signin);
  const goTo = useNavigate();

  // ###################################### Formik setup  ######################################
  const initialValues = {
    title: "",
    topic: "",
  };
  const onSubmit = (values) => {
    dispatch(getTitleForQuizView(values.title));
    dispatch(getTopicForQuizView(values.topic));
    console.log(values);
    dispatch(changeQuestionNameAndTitleButtonClickedStatus());
    values["user_id"] = signin.user_id;
    dispatch(createQuiz(values));
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required!"),
    topic: Yup.string().required("Required!"),
  });
  // ###################################### Formik setup  ######################################
  return (
    <div className="quiz_container">
      <div className="form_container">
        <div className="question_container">
          <div className="qustion_title_and_topic">
            {/* // ###################################### Title and Topic input  ###################################### */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="w-full h-full  flex flex-col justify-center items-center p-5">
                <label className="w-full my-5 inline-flex" htmlFor="title">
                  Quiz Title
                </label>
                <Field
                  className="w-full h-10 border border-gray-500"
                  type="title"
                  id="title"
                  name="title"
                ></Field>
                <ErrorMessage name="title" />

                <label className="" htmlFor="topic">
                  Subject
                </label>
                <Field type="text" id="topic" name="topic"></Field>
                <ErrorMessage name="topic" />

                <button
                  type="submit"
                  className="title_submit_button"
                  style={{ backgroundColor: "#504276" }}
                >
                  Save
                </button>
              </Form>
            </Formik>
            {/* // ###################################### Title and Topic input  ###################################### */}
          </div>
        </div>

        {button.questionNameAndTitleButtonClicked === true && (
          <div className="choose_queston_type_container">
            <div className="question_type">
              <p
                className="true_false_button"
                onClick={() => goTo("/profile/quiz")}
              >
                True/False
              </p>
              <p
                className="mulutiple_choice_button"
                onClick={() => goTo("multiple")}
              >
                Multiple Choices
              </p>
            </div>
            <div className="question_type_details">
              <Outlet />
            </div>
          </div>
        )}
      </div>
      <div className="quiz_view_container">
        <div className="quiz_view_title_and_topic">
          <div className="title_view">
            {quizView.quizTitleView.length !== 0 && <DiCelluloid />}
            <>{quizView.quizTitleView}</>
            {quizView.quizTitleView.length !== 0 && <DiCelluloid />}
          </div>
          <div className="topic_view">{quizView.quizTopicView}</div>
        </div>
        <div className="quiz_view_questions">
          <CardQuiz />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
