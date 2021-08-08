import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import "./App.scss";
import Form from "components/Form/Form";
import ContentPage from "components/ContentPage/ContentPage";

function App() {
  const [t, i18n] = useTranslation("global");

  const [submitted, setSubmitted] = useState(Boolean);

  // Update the state to determine which component is displayed
  const submittedHandler = (isSubmitted) => {
    setSubmitted(isSubmitted);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>{t("app.registration-form")}</h1>
      </header>
      {!submitted ? (
        <Form onPassToApp={submittedHandler} />
      ) : (
        <ContentPage submitted={submitted} onPassToApp={submittedHandler} />
      )}
      <footer className="footer">
        <div className="btn-group">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        </div>
        <span>
          © Copyright 2021. <strong>"TBM85"</strong>
        </span>
        <span> All rights reserved</span>
      </footer>
    </div>
  );
}

export default App;

App.propTypes = {
  submitted: PropTypes.bool,
  submittedHandler: PropTypes.func,
};
