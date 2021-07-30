import React from "react";

import classes from "./Form.module.scss";

const Form = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={classes.Form}>
      <div className={classes.FormControl}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password1">Password</label>
        <input id="password1" type="password" />
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password2">Confirm Password</label>
        <input id="password2" type="password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Form;
