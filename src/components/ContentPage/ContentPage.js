import Button from "components/UI/Button/Button";
import React from "react";

import classes from "./ContentPage.module.scss";

const ContentPage = () => {
  return (
    <div className={classes.ContentPage}>
      <h2>Account created, you are now a registered user</h2>
      <Button type="button" className={classes.LogoutBtn}>Logout</Button>
    </div>
  );
};

export default ContentPage;
