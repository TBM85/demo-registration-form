import React, { useEffect, useState } from "react";
import useForm from "hooks/useForm";
import PropTypes from "prop-types";

import classes from "./Form.module.scss";
import Button from "components/UI/Button/Button";

const Form = (props) => {
  const {
    isSubmitted,
    values,
    isValid,
    invalidUsername,
    invalidEmail,
    invalidPassword1,
    invalidPassword2,
    isInvalidUsername,
    isInvalidEmail,
    isInvalidPassword1,
    isInvalidPassword2,
    isEmptyUsername,
    isEmptyEmail,
    isEmptyPassword1,
    isEmptyPassword2,
    changeValueHandler,
    submitHandler,
    inputBlurHandler,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  // Toggle between showing and not showing password
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Pass the "isSubmitted" variable to parent component "App"
    props.onPassToApp(isSubmitted);
  });

  return (
    <form onSubmit={submitHandler} className={classes.Form}>
      <div className={classes.FormControl}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Pick a username"
          value={values.username}
          onChange={changeValueHandler}
          autoComplete="off"
          maxLength={25}
          onBlur={inputBlurHandler}
          className={`${
            isInvalidUsername
              ? classes["error"]
              : !invalidUsername
              ? classes["verified"]
              : ""
          }`}
        />
        {isInvalidUsername && !isEmptyUsername ? (
          <small>Please enter at least 6 digits</small>
        ) : isInvalidUsername ? (
          <small>You must enter your username</small>
        ) : (
          ""
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={values.email}
          onChange={changeValueHandler}
          autoComplete="off"
          onBlur={inputBlurHandler}
          className={`${
            isInvalidEmail
              ? classes["error"]
              : !invalidEmail
              ? classes["verified"]
              : ""
          }`}
        />
        {isInvalidEmail && !isEmptyEmail ? (
          <small>Please enter a valid email</small>
        ) : isInvalidEmail ? (
          <small>You must enter your email</small>
        ) : (
          ""
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password1">
          Password
          <div className={classes["checkbox"]} onClick={showPasswordHandler}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={showPasswordHandler}
            />{" "}
            Show password
          </div>
        </label>
        <input
          id="password1"
          type={showPassword ? "text" : "password"}
          name="password1"
          placeholder="Create a password"
          value={values.password1}
          onChange={changeValueHandler}
          autoComplete="off"
          onBlur={inputBlurHandler}
          className={`${
            isInvalidPassword1
              ? classes["error"]
              : !invalidPassword1
              ? classes["verified"]
              : ""
          }`}
        />
        {isInvalidPassword1 && !isEmptyPassword1 ? (
          <small>At least 8 digits, 1 uppercase and 1 number</small>
        ) : isInvalidPassword1 ? (
          <small>You must enter a password</small>
        ) : (
          ""
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password2">Confirm Password</label>
        <input
          id="password2"
          type={showPassword ? "text" : "password"}
          name="password2"
          placeholder="Repeat the password"
          value={values.password2}
          onChange={changeValueHandler}
          autoComplete="off"
          onBlur={inputBlurHandler}
          disabled={isInvalidPassword1 || isEmptyPassword1 ? "disable" : ""}
          className={`${
            isInvalidPassword2
              ? classes["error"]
              : !invalidPassword2
              ? classes["verified"]
              : ""
          }`}
        />
        {isInvalidPassword2 && !isEmptyPassword2 ? (
          <small>It is not the same password</small>
        ) : isInvalidPassword2 ? (
          <small>You must confirm the password</small>
        ) : (
          ""
        )}
      </div>
      <Button type="submit" className={!isValid && "invalid"}>
        Sign Up
      </Button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  showPassword: PropTypes.bool,
  showPasswordHandler: PropTypes.func,
};