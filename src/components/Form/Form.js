import React from "react";

import classes from "./Form.module.scss";

const Form = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.FormControl}>
        <label htmlFor="firstname">First Name</label>
        <input id="fistname" type="text" />
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" type="text" />
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
