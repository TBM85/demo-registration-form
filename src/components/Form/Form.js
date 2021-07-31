import React, { useEffect } from "react";
import useForm from "hooks/useForm";

import classes from "./Form.module.scss";
import Button from "components/UI/Button/Button";

const Form = (props) => {
  const { isSubmitted, values, changeValueHandler, submitHandler } = useForm();

  useEffect(() => {
    // Pass the "isSubmitted" variable to parent component "App"
    props.onPassToApp(isSubmitted);
  })

  return (
    <form onSubmit={submitHandler} className={classes.Form}>
      <div className={classes.FormControl}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={values.username}
          onChange={changeValueHandler}
        />
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={changeValueHandler}
        />
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password1">Password</label>
        <input
          id="password1"
          type="password"
          name="password1"
          value={values.password1}
          onChange={changeValueHandler}
        />
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password2">Confirm Password</label>
        <input
          id="password2"
          type="password"
          name="password2"
          value={values.password2}
          onChange={changeValueHandler}
        />
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default Form;
