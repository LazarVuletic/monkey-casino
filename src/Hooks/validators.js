export const validators = {
  minLength: (value, validator) => {
    const minLength = parseInt(validator.parameters.targetLength);
    return minLength > value?.length || !Boolean(value?.length)
      ? validator.invalid_message
      : "";
  },
  maxLength: (value, validator) => {
    const maxLength = parseInt(validator.parameters.targetLength);
    return maxLength < value?.length ? validator.invalid_message : "";
  },
  lengthMismatch:(value,validator)=>{
    const target = parseInt(validator.parameters.targetLength);
    return target !== value?.length || !Boolean(value)? validator.invalid_message : "";
  },
  regex: (value, validator) => {
    const newRegex = new RegExp(
      validator.parameters.regex,
      validator.parameters.modifiers
    );
    console.log(
      validator.parameters.regex,
      validator.parameters.modifiers,
      "regexexp"
    );
    return !newRegex.test(value) || !Boolean(value)  ? validator.invalid_message : "";
  },
  emailValidator: (value, validator) => {
    console.log(value, validator, "validatorEmail");
    const emailValid = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return !Boolean(emailValid) ? validator.invalid_message : "";
  },
  olderThan: (value, validator) => {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age < validator.parameters.age || !Boolean(age) ? validator.invalid_message : "";
   
  },
  confirmPassword:(value,validator,values)=>{
    let password = values?.["password"]
    return value !== password ? validator.invalid_message : ""
  }
};
