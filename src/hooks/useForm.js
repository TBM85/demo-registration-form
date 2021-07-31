import { useState } from "react";

const useForm = () => {
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
  };

  return { values, changeValueHandler, submitHandler };
}

export default useForm;