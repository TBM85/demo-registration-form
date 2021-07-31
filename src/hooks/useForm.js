import { useState } from "react";

const useForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  // Change the values of the input fields of the form
  const changeValueHandler = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  // Submit the values of the form input fields and open the content page
  const submitHandler = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  return { isSubmitted, values, changeValueHandler, submitHandler };
}

export default useForm;