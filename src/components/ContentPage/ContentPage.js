import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import classes from "./ContentPage.module.scss";
import Button from "components/UI/Button/Button";

const ContentPage = (props) => {
  const { submitted } = props;
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
      <h2>Account created, you are now a registered user</h2>
      <Button
        type="button"
        className={classes.LogoutBtn}
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </div>
  );
};

export default ContentPage;

ContentPage.propTypes = {
  isSubmitted: PropTypes.bool,
  logoutHandler: PropTypes.func,
};
