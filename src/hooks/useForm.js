import { useEffect, useState } from "react";

const useForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  // Change the values of the input fields of the form
  const changeValueHandler = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const [isValid, setIsValid] = useState(Boolean);

  const invalidUsername = values.username.trim() === "";
  const invalidEmail = values.email.trim() === "";
  const invalidPassword1 = values.password1.trim() === "";
  const invalidPassword2 = values.password2.trim() === "";


  const [isTouched, setIsTouched] = useState({
    username: false,
    email: false,
    password1: false,
    password2: false
  });

  const inputBlurHandler = (event) => {
    const { name } = event.target;

    setIsTouched({
      ...isTouched,
      [name]: true
    })
  };

  // Submit the values of the form input fields and open the content page
  const submitHandler = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    setIsSubmitted(true);
  };

  useEffect(() => {
    if (
      invalidUsername ||
      invalidEmail ||
      invalidPassword1 ||
      invalidPassword2
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [invalidEmail, invalidPassword1, invalidPassword2, invalidUsername]);

  return {
    isSubmitted,
    values,
    isValid,
    isTouched,
    invalidUsername,
    invalidEmail,
    invalidPassword1,
    invalidPassword2,
    changeValueHandler,
    submitHandler,
    inputBlurHandler
  };
};

export default useForm;
