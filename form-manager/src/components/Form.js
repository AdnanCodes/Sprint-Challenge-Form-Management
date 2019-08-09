import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ errors, touched }) => {
  return (
    <div className="">
      <h1>Welcome User, Let's get you checked-in!</h1>
      <Form className="user-form">
        <Field
          type="text"
          name="username"
          placeholder="Username"
          className="user"
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
          type="password"
          name="password"
          placeholder="Password"
          className=" user pass"
        />
        <button type="submit">Submit!</button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .min(6, "Password needs to be at least 6 characters")
      .required("Password is required")
  }),
  handleSubmit(values) {
    axios
      .post(`http://localhost:5000/api/register`, values)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);

export default FormikUserForm;
