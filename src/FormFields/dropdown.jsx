import React from "react";
import { useTranslation } from "react-i18next";

function Dropdown({  field,value,error, handleChange }) {
  const {t} = useTranslation()
  return (
    <div>
      <h4>{t(field.code)}</h4>
      <select name={field.code} id={field.code} onChange={handleChange}>
      <option value="">{t(`select_${field.code}`)}</option>
        {field.valueList.map((item) => {
          return <option value={item.value}>{t(item.name)}</option>;
        })}
      </select>
      <p className={`${error ? "error": ""}`}>{error ? t(error) : ""}</p>
    </div>
  );
}

export default Dropdown;
