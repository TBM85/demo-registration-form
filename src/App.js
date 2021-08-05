import { useState } from "react";
import PropTypes from "prop-types";

import "./App.scss";
import Form from "components/Form/Form";
import ContentPage from "components/ContentPage/ContentPage";

function App() {
  const [submitted, setSubmitted] = useState(Boolean);

  // Update the state to determine which component is displayed
  const submittedHandler = (isSubmitted) => {
    setSubmitted(isSubmitted);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Registration Form</h1>
      </header>
      {!submitted ? (
        <Form onPassToApp={submittedHandler} />
      ) : (
        <ContentPage submitted={submitted} onPassToApp={submittedHandler} />
      )}
      <footer className="footer">
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
