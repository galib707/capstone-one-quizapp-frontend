import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { userSignup } from "../features/signupReducer";

function Signup() {
  const dispatch = useDispatch();

  //initial values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  //onsubmit handler
  const onSubmit = (values) => {
    console.log(values);
    dispatch(userSignup(values));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Inavalid Email Format").required("Required!"),
    password: Yup.string().required("Required!"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div className="w-full h-4/2 flex flex-col justify-center items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-full h-full flex flex-col justify-center items-center p-5">
          <label className="w-full my-2 inline-flex" htmlFor="Name">
            User Name
          </label>
          <Field
            className="w-full h-10 border border-gray-500"
            type="text"
            id="name"
            name="name"
          ></Field>
          <ErrorMessage name="name" />

          <label className="w-full my-2 inline-flex" htmlFor="email">
            Email
          </label>
          <Field
            className="w-full h-10 border border-gray-500"
            type="email"
            id="email"
            name="email"
          ></Field>
          <ErrorMessage name="email" />

          <label className="w-full my-2 inline-flex" htmlFor="password">
            Password
          </label>
          <Field
            className="w-full h-10 border border-gray-500"
            type="password"
            id="password"
            name="password"
          ></Field>
          <ErrorMessage name="password" />
          <label className="w-full my-2 inline-flex" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Field
            className="w-full h-10 border border-gray-500"
            type="password"
            id="confirm_password"
            name="confirm_password"
          ></Field>
          <ErrorMessage name="confirm_password" />
          <button
            type="submit"
            className="w-full h-14 border border-gray-900 bg-black rounded-md cursor-pointer text-white hover:bg-gray-500 hover:text-black  mt-10"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Signup;
