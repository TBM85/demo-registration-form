import React, { Fragment } from "react";

import classes from "./Validate.module.scss";
import error from "assets/icons/error.svg";
import verified from "assets/icons/verified.svg";

const Validate = (props) => {
  const { isValid } = props;

  return (
    <Fragment>
      <img
        src={isValid ? `${verified}` : `${error}`}
        alt={isValid ? "Success icon" : "Error icon"}
        className={isValid ? classes["success"] : classes["error"]}
      />
      <small className={isValid ? "" : classes["error"]}>Error message</small>
    </Fragment>
  );
};

export default Validate;
