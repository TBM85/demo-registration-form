import "./App.scss";
import Form from "components/Form/Form";
import ContentPage from "components/ContentPage/ContentPage";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Registration Form</h1>
      </header>
      <Form />
      <ContentPage />
    </div>
  );
}

export default App;
