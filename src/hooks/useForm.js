import {useEffect, useState} from 'react';
import {isEmail, isURL, matchPassword, minLength} from '../util/formValidators';

const formValidators = {
  required: val => (val === '' ? 'This field is required' : ''),
  number: val =>
    !(!Number.isNaN(val) && !Number.isNaN(parseFloat(val)))
      ? 'Please enter number'
      : '',
  url: val => (!isURL(val) ? 'Please enter valid url' : ''),
  email: val => (!isEmail(val) ? 'Please enter valid email' : ''),
  password: val =>
    !minLength(val, 5) ? 'Should be at least 5 characters' : '',
  confirmPassword: (password, confirmpassword) =>
    !matchPassword(password, confirmpassword) ? 'Passwords not match' : '',
};

const useForm = initialValues => {
  const [formValues, setFormValues] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const setValues = (vals, reset = false) => {
    const values = {};
    Object.keys(vals).forEach(key => {
      values[key] = {
        value: reset ? '' : vals[key],
        error: '',
        hasError: vals[key] === '',
      };
    });
    setFormValues(values);
  };

  useEffect(() => {
    setValues(initialValues);
  }, []);

  const setValue = (name, value, fieldName) => {
    setFormValues(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        [fieldName]: value,
        hasError: fieldName === 'error' && value !== '',
      },
    }));
  };

  const checkFormValidity = () => {
    let isFormValid = true;
    Object.keys(formValues).forEach(key => {
      if (key !== 'id') {
        isFormValid &&= !formValues[key].hasError;
      }
    });
    setFormIsValid(isFormValid);
    return isFormValid;
  };

  const validate = (name, value, validators) => {
    let message = '';
    if (validators.includes('required')) {
      message = formValidators.required(value);
    }

    if (validators.includes('number') && message === '') {
      message = formValidators.number(value);
    }

    if (validators.includes('url') && message === '') {
      message = formValidators.url(value);
    }

    if (validators.includes('email') && message === '') {
      message = formValidators.email(value);
    }

    if (validators.includes('password') && message === '') {
      message = formValidators.password(value);
    }

    if (validators.includes('confirmPassword') && message === '') {
      message = formValidators.confirmPassword(
        value,
        formValues.confirmpassword.value,
      );
    }

    setValue(name, message, 'error');
    checkFormValidity();
  };

  const handleInput = ({target: {name, value}}, validators) => {
    setValue(name, value, 'value');
    validate(name, value, validators);
  };

  const submitForm = (submitCallback, reset = true) => {
    if (checkFormValidity()) {
      const values = {};
      Object.keys(formValues).forEach(key => {
        values[key] = formValues[key].value;
      });

      submitCallback(values);
      setValues(reset ? initialValues : values, reset);
    }
  };

  return [handleInput, formValues, formIsValid, submitForm];
};

export default useForm;
