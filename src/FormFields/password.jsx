import React from "react";
import { useTranslation } from "react-i18next";

function Password({ field, value, error, handleChange, handleBlur }) {
  const {t} = useTranslation()
  return (
    <div>
      <h4>{t(field.code)}</h4>
      <input
        name={field.code}
        type={field.fieldType}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p className={`${error ? "error": ""}`}>{error ? t(error) : ""}</p>
    </div>
  );
}

export default Password;
