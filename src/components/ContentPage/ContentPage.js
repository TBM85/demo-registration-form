import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import classes from "./ContentPage.module.scss";
import Button from "components/UI/Button/Button";

const ContentPage = (props) => {
  const { submitted } = props;

  const [t] = useTranslation("global");

  const [isSubmitted, setIsSubmitted] = useState(submitted);

  // Close the content page and the registration form appears
  const logoutHandler = () => {
    setIsSubmitted(!submitted);
  };

  useEffect(() => {
    // Pass the "isSubmitted" variable to parent component "App"
    props.onPassToApp(isSubmitted);
  });

  return (
    <div className={classes.ContentPage}>
      <div className={classes["like"]}></div>
      <h2>{t("content-page.text")}</h2>
      <Button
        type="button"
        className={classes.LogoutBtn}
        onClick={logoutHandler}
      >
        {t("content-page.logout-button")}
      </Button>
    </div>
  );
};

export default ContentPage;

ContentPage.propTypes = {
  isSubmitted: PropTypes.bool,
  logoutHandler: PropTypes.func,
};
