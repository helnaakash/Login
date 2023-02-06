import React, { useState } from "react";
import { dataObj } from "./Data.js";
import "./Signup.css";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { basicSchema } from "./basicSchema.js";

export default function Signup() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    if (values ?? null) {
      const data = [
        ...dataObj,
        {
          username: values.username,
          password: values.password,
          email: values.email,
        },
      ];
      console.log(data);
      navigate("/home");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  // console.log(errors);
  return (
    <div className="sign-container">
      <div className="card">
        <div className="sign-item">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="form form-login"
          >
            <div className="form-field">
              <label className="user"></label>

              <input
                type="text"
                id="username"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <span className="input-error"> {errors.username}</span>
              )}
            </div>

            <div className="form-field">
              <label className="user"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
                // className= "input_error"
              />
              {errors.email && touched.email && (
                <span className="error"> {errors.email}</span>
              )}
            </div>

            <div className="form-field">
              <label className="user"></label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              <div>
                {errors.password && touched.password && (
                  <span className="error"> {errors.password}</span>
                )}
              </div>
            </div>

            <div className="form-field">
              <input
                disabled={isSubmitting}
                type="submit"
                value="Sign Up"
                className="button-class"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
