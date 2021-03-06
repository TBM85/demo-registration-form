import { useEffect, useState } from "react";
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

  const [lang, setLang] = useState("en");

  const changeLangHandler = () => {
    if (lang === "en") {
      setLang("es");
    } else {
      setLang("en");
    }
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

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
          <button
            className={lang === "en" ? "active" : ""}
            onClick={lang === "en" ? null : changeLangHandler}
          >
            EN
          </button>
          <button
            className={lang === "es" ? "active" : ""}
            onClick={lang === "es" ? null : changeLangHandler}
          >
            ES
          </button>
        </div>
        <span>
          © {t("app.footer1")} 2021. <strong>"TBM85"</strong>
        </span>
        <span> {t("app.footer2")}</span>
      </footer>
    </div>
  );
}

export default App;

App.propTypes = {
  submitted: PropTypes.bool,
  submittedHandler: PropTypes.func,
};
