import React, { useEffect, useState } from "react";
import useForm from "hooks/useForm";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

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

  const [t] = useTranslation("global");

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
        <label htmlFor="username">{t("form.username")}</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder={t("form.username-placeholder")}
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
          <small>{t("form.username-error-invalid")}</small>
        ) : isInvalidUsername ? (
          <small>{t("form.username-error-empty")}</small>
        ) : (
          ""
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="email">{t("form.email")}</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={t("form.email-placeholder")}
          value={values.email.toLowerCase()}
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
          <small>{t("form.email-error-invalid")}</small>
        ) : isInvalidEmail ? (
          <small>{t("form.email-error-empty")}</small>
        ) : (
          ""
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password1">
          {t("form.password1")}
          <div className={classes["checkbox"]} onClick={showPasswordHandler}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={showPasswordHandler}
            />{" "}
            {t("form.password1-checkbox")}
          </div>
        </label>
        <input
          id="password1"
          type={showPassword ? "text" : "password"}
          name="password1"
          placeholder={t("form.password1-placeholder")}
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
          <small>{t("form.password1-error-invalid")}</small>
        ) : isInvalidPassword1 ? (
          <small>{t("form.password1-error-empty")}</small>
        ) : (
          ""
        )}
      </div>
      <div className={classes.FormControl}>
        <label htmlFor="password2">{t("form.password2")}</label>
        <input
          id="password2"
          type={showPassword ? "text" : "password"}
          name="password2"
          placeholder={t("form.password2-placeholder")}
          value={values.password2}
          onChange={changeValueHandler}
          autoComplete="off"
          onBlur={inputBlurHandler}
          className={`${
            isInvalidPassword2
              ? classes["error"]
              : !invalidPassword2
              ? classes["verified"]
              : ""
          }`}
        />
        {isInvalidPassword2 && !isEmptyPassword2 ? (
          <small>{t("form.password2-error-invalid")}</small>
        ) : isInvalidPassword2 ? (
          <small>{t("form.password2-error-empty")}</small>
        ) : (
          ""
        )}
      </div>
      <Button type="submit" className={!isValid && "invalid"}>
        {t("form.sign-up-button")}
      </Button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  showPassword: PropTypes.bool,
  showPasswordHandler: PropTypes.func,
};
