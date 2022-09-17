import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changeSigninStatus, userSignin } from "../features/signinReducer";
import { useNavigate } from "react-router-dom";

function Signin() {
  const dispatch = useDispatch();
  const signin = useSelector((state) => state.signin);
  const goTo = useNavigate();

  //redirect to profile page after signin
  if (signin.isSignedIn) {
    goTo("/profile");
    dispatch(changeSigninStatus());
  }

  // initial values
  const initialValues = {
    email: "",
    password: "",
  };

  // on submit handlers
  const onSubmit = (values) => {
    dispatch(userSignin(values));
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Inavalid Email Format").required("Required!"),
    password: Yup.string().required("Required!"),
  });

  return (
    <div className="w-full h-4/5 flex flex-col justify-center items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-full h-full  flex flex-col justify-center items-center p-5">
          <label className="w-full my-5 inline-flex" htmlFor="email">
            Email
          </label>
          <Field
            className="w-full h-10 border border-gray-500"
            type="email"
            id="email"
            name="email"
          ></Field>
          <ErrorMessage name="email" />

          <label className="w-full my-5 inline-flex" htmlFor="password">
            Password
          </label>
          <Field
            className="w-full h-10 border border-gray-500"
            type="password"
            id="password"
            name="password"
          ></Field>
          <ErrorMessage name="password" />

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

export default Signin;
