import { useState } from "react";

const useForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const changeValueHandler = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  return { isSubmitted, values, changeValueHandler, submitHandler };
}

export default useForm;