import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { storeQuestionLocally } from "../features/quizViewReducer";

function MultipleChoice() {
  const dispatch = useDispatch();
  const quizView = useSelector((state) => state.quizView);
  const quiz = useSelector((state) => state.quiz);

  // initial values
  const initialValues = {
    question: "",
    picked: "",
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
    choiceFour: "",
  };

  // on submit handlers
  const onSubmit = (values) => {
    values["quizId"] = quiz.quizId;
    values["type"] = "multiple";

    // console.log(values);
    dispatch(storeQuestionLocally(values));
  };

  const validationSchema = Yup.object({
    question: Yup.string().required("Required!"),
    picked: Yup.string().required("Required!"),
  });
  return (
    <div className="multiple_choice_conatiner">
      <div className="image_upload">
        <div className="image_container"></div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form_container_multiple_choice">
          <div className="upload_button">
            <Field
              type="file"
              as="input"
              id="image"
              name="imgae"
              accept="image/*"
            ></Field>
          </div>
          <div className="question">
            <label className="question_level" htmlFor="question">
              <p> Question :</p>
            </label>
            <Field
              className="question_input"
              type="question"
              id="question"
              name="question"
            ></Field>
            <ErrorMessage name="question" />
          </div>
          <div className="choice_container">
            <div className="choice_container_row-1">
              <label>
                <Field type="radio" name="picked" value="1" />
                <Field
                  className="choice_ipnput"
                  type="text"
                  id="choiceOne"
                  name="choiceOne"
                  placeholder="Option A"
                ></Field>
              </label>
              <ErrorMessage name="picked" />
              <label>
                <Field type="radio" name="picked" value="2" />
                <Field
                  className="choice_ipnput"
                  type="text"
                  id="choiceTwo"
                  name="choiceTwo"
                  placeholder="Option B"
                ></Field>
              </label>
              <ErrorMessage name="picked" />
            </div>
            <div className="choice_container_row-2">
              <label>
                <Field type="radio" name="picked" value="3" />
                <Field
                  className="choice_ipnput"
                  type="text"
                  id="choiceThree"
                  name="choiceThree"
                  placeholder="Option C"
                ></Field>
              </label>
              <ErrorMessage name="picked" />
              <label>
                <Field type="radio" name="picked" value="4" />
                <Field
                  className="choice_ipnput"
                  type="text"
                  id="choiceFour"
                  name="choiceFour"
                  placeholder="Option D"
                ></Field>
              </label>

              <ErrorMessage name="picked" />
            </div>
          </div>
          <div className="add_button_container">
            <button
              type="submit"
              className="Add_question_button"
              style={{ backgroundColor: "#504276" }}
            >
              Add <AiOutlineDoubleRight />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MultipleChoice;
