import React from "react";
import Input from "./input";
import Dropdown from "./dropdown";
import Password from "./password";
import Date from "./date";

function FormFields({ field, values, errors, handleChange, handleBlur }) {
  let commonProps = {
    field:
      field.fieldType === "string"
        ? { ...field, fieldType: "text" }
        : field,
    value: values?.[field.code],
    error: errors?.[field.code],
    handleChange: handleChange,
    handleBlur: handleBlur,
  };
  console.log(errors,"-------errori")
  let fields = {
    string: <Input {...commonProps} />,
    dropdown: <Dropdown {...commonProps} />,
    password: <Password {...commonProps} />,
    date: <Date {...commonProps} />,
  };
  return fields[field.fieldType];
}

export default FormFields;
