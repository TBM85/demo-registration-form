import { useState } from "react";

import "./App.scss";
import Form from "components/Form/Form";
import ContentPage from "components/ContentPage/ContentPage";

function App() {
  const [submitted, setSubmitted] = useState();

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
    </div>
  );
}

export default App;
