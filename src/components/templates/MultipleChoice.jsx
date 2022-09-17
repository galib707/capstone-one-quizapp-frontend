import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function MultipleChoice() {
  // initial values
  const initialValues = {
    question: "",
    picked: "",
  };

  // on submit handlers
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    question: Yup.string().required("Required!"),
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
        <Form className="">
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
            <label className="w-full my-5 inline-flex" htmlFor="question">
              Question
            </label>
            <Field
              className="w-full h-10 border border-gray-500"
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
                  className=""
                  type="question"
                  id="question"
                  name="question"
                ></Field>
              </label>
              <ErrorMessage name="picked" />
              <label>
                <Field type="radio" name="picked" value="2" />
                <Field
                  className=""
                  type="question"
                  id="question"
                  name="question"
                ></Field>
              </label>
              <ErrorMessage name="picked" />
            </div>
            <div className="choice_container_row-2">
              <label>
                <Field type="radio" name="picked" value="3" />
                <Field
                  className=""
                  type="question"
                  id="question"
                  name="question"
                ></Field>
              </label>
              <ErrorMessage name="picked" />
              <label>
                <Field type="radio" name="picked" value="4" />
                <Field
                  className=""
                  type="question"
                  id="question"
                  name="question"
                ></Field>
              </label>

              <ErrorMessage name="picked" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-10 flex flex-col justify-center items-center bg-slate-800 text-slate-50 mt-5"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default MultipleChoice;
