const validateField = (fieldName, value, validator) => {
    switch (validator.key) {
      case "minLength":
        if (value.length < validator.parameters.targetLength) {
          return validator.invalid_message;
        }
        break;
      case "maxLength":
        if (value.length > validator.parameters.targetLength) {
          return validator.invalid_message;
        }
        break;
      case "regex":
        const regex = new RegExp(validator.parameters.regex, validator.parameters.modifiers || "");
        if (!regex.test(value)) {
          return validator.invalid_message;
        }
        break;
      // ... add other cases based on the validators in your JSON
    }
};

export default validateField;