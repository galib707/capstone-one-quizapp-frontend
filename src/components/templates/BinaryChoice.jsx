import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { storeQuestionLocally } from "../features/quizViewReducer";
import { useDispatch, useSelector } from "react-redux";

function BinaryChoice() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  const initialValues = {
    question: "",
    picked: "",
  };

  // on submit handlers
  const onSubmit = (values) => {
    console.log(values);
    values["quizId"] = quiz.quizId;
    values["type"] = "binary";

    // console.log(values);
    dispatch(storeQuestionLocally(values));
  };

  const validationSchema = Yup.object({
    question: Yup.string().required("Required!"),
    picked: Yup.string().required("Required!"),
  });
  return (
    <div className="binary_choice_conatiner">
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
            <div id="true_false_div" className="choice_container_row-1">
              <div className="true_div">
                <label>
                  <Field
                    type="radio"
                    id="radio_tr"
                    name="picked"
                    value="true"
                  />
                  True
                </label>
              </div>
              <ErrorMessage name="picked" />
              <div className="false_div">
                <label>
                  <Field
                    type="radio"
                    id="radio_fl"
                    name="picked"
                    value="false"
                  />
                  false
                </label>
              </div>
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

export default BinaryChoice;
