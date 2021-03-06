import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

  const emptyUsername = values.username.trim() === "";
  const emptyEmail = values.email.trim() === "";
  const emptyPassword1 = values.password1.trim() === "";
  const emptyPassword2 = values.password2.trim() === "";

  // Username verification
  const usernameIsValid = (username) => {
    return username.length >= 6;
  };

  // Email address verification function from Tyler McGinnis
  // https://dev.to/tylermcginnis/how-to-validate-an-email-address-in-javascript-f7i
  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password verification
  // At least 8 digits, including a capital letter and a number
  const password1IsValid = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  };

  const invalidUsername = emptyUsername || !usernameIsValid(values.username);
  const invalidEmail = emptyEmail || !emailIsValid(values.email);
  const invalidPassword1 =
    emptyPassword1 || !password1IsValid(values.password1);
  const invalidPassword2 =
    emptyPassword2 || values.password2 !== values.password1;

  const [isTouched, setIsTouched] = useState({
    username: false,
    email: false,
    password1: false,
    password2: false,
  });

  const inputBlurHandler = (event) => {
    const { name } = event.target;

    setIsTouched({
      ...isTouched,
      [name]: true,
    });
  };

  // Define when inputs are invalid
  const isInvalidUsername =
    (isTouched.username && invalidUsername) ||
    (isTouched.email && invalidUsername) ||
    (isTouched.password1 && invalidUsername) ||
    (isTouched.password2 && invalidUsername);

  const isInvalidEmail =
    (isTouched.email && invalidEmail) ||
    (isTouched.password1 && invalidEmail) ||
    (isTouched.password2 && invalidEmail);

  const isInvalidPassword1 =
    (isTouched.password1 && invalidPassword1) ||
    (isTouched.password2 && invalidPassword1);

  const isInvalidPassword2 = isTouched.password2 && invalidPassword2;

  // Define when inputs are empty
  const isEmptyUsername = !isTouched.username || emptyUsername;
  const isEmptyEmail = !isTouched.email || emptyEmail;
  const isEmptyPassword1 = !isTouched.password1 || emptyPassword1;
  const isEmptyPassword2 = !isTouched.password2 || emptyPassword2;

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
    invalidUsername,
    invalidEmail,
    invalidPassword1,
    invalidPassword2,
    isInvalidUsername,
    isInvalidEmail,
    isInvalidPassword1,
    isInvalidPassword2,
    isEmptyUsername,
    isEmptyEmail,
    isEmptyPassword1,
    isEmptyPassword2,
    changeValueHandler,
    submitHandler,
    inputBlurHandler,
  };
};

export default useForm;

useForm.propTypes = {
  isSubmitted: PropTypes.bool,
  values: PropTypes.object,
  changeValueHandler: PropTypes.func,
  isValid: PropTypes.bool,
  emptyUsername: PropTypes.bool,
  emptyEmail: PropTypes.bool,
  emptyPassword1: PropTypes.bool,
  emptyPassword2: PropTypes.bool,
  usernameIsValid: PropTypes.func,
  emailIsValid: PropTypes.func,
  password1IsValid: PropTypes.func,
  invalidUsername: PropTypes.bool, 
  invalidEmail: PropTypes.bool,
  invalidPassword1: PropTypes.bool,
  invalidPassword2: PropTypes.bool,
  isTouched: PropTypes.object,
  inputBlurHandler: PropTypes.func,
  isInvalidUsername: PropTypes.bool, 
  isInvalidEmail: PropTypes.bool,
  isInvalidPassword1: PropTypes.bool,
  isInvalidPassword2: PropTypes.bool,
  isEmptyUsername: PropTypes.bool, 
  isEmptyEmail: PropTypes.bool,
  isEmptyPassword1: PropTypes.bool,
  isEmptyPassword2: PropTypes.bool,
  submitHandler: PropTypes.func
}
