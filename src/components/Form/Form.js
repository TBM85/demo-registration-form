import React, { useEffect } from "react";
import useForm from "hooks/useForm";

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
    changeValueHandler,
    submitHandler,
  } = useForm();

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
        />
        {invalidUsername && (
          <small>You must enter your username</small>
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
        />
        {invalidEmail && (
          <small>You must enter your email</small>
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password1">Password</label>
        <input
          id="password1"
          type="password"
          name="password1"
          placeholder="Create a password"
          value={values.password1}
          onChange={changeValueHandler}
          autoComplete="off"
        />
        {invalidPassword1 && (
          <small>You must enter a password</small>
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password2">Confirm Password</label>
        <input
          id="password2"
          type="password"
          name="password2"
          placeholder="Repeat the password"
          value={values.password2}
          onChange={changeValueHandler}
          autoComplete="off"
        />
        {invalidPassword2 && (
          <small>You must confirm the password</small>
        )}
      </div>
      <Button type="submit" className={!isValid && "invalid"}>
        Sign Up
      </Button>
    </form>
  );
};

export default Form;
