import { useState, useEffect } from "react";
import { validators } from "./validators";

const useCustomForm = (formData, step, setStep) => {
  let initialValues = formData.reduce((acc, field) => {
    acc[field.code] =  "";
    return acc;
  }, {});

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    let field = formData.find((el) => el.code === event.target.name);
    let value = Boolean(values[field.code]) ? values[field.code] : "";
    let error = validateField(field, value, values);

    const hasErrors = Object.values(error).some((errorMessage) => errorMessage);

    if (hasErrors) {
      setErrors({
        ...errors,
        ...error,
      });
    } else {
      setErrors({
        ...errors,
        [field.code]: "",
      });
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    let newErrors = { ...errors };
    //looping through schema and sending value like value[field.code], field and all values
    //specially for password missMatch only
    formData
      ?.filter((el) => el.step === step)
      .forEach((field) => {
        const error = validateField(field, values?.[field.code], values);
        const hasErrors = Object.values(error).some(
          (errorMessage) => errorMessage
        );

        if (hasErrors) {
          newErrors = { ...newErrors, ...error };
        } else {
          newErrors[field.code] = "";
        }
      });

    setErrors(newErrors); // Updating the state once after processing all fields
    const noErrors = Object.values(newErrors).every((value) => !Boolean(value));
    const hasNextStep = formData.some((el) => el?.step === step + 1);

    if (noErrors) {
      setLoading(false);
      if (hasNextStep) {
        setStep(step + 1);
      } else {
        setIsLast(true);
      }
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    loading,
    isLast
  };
};

const validateField = (field, value, values) => {
  let errors = {};
  for (const validator of field.validators) {
    let validationResult = validators?.[validator.key](
      value,
      validator,
      values
    );
    if (Boolean(validationResult)) {
      errors[field.code] = validationResult;
    }
  }

  return errors;
};

export default useCustomForm;
