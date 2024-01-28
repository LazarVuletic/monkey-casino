import React from 'react'
import { useTranslation } from 'react-i18next'

function Date({ field, value, error, handleChange,handleBlur}) {
  const {t} = useTranslation()
  return (
    <div>
      <h4>{t(field.code)}</h4>
      <input name={field.code} type={field.fieldType} onBlur={handleBlur} value={value} onChange={handleChange} />
      <p className={`${error ? "error": ""}`}>{error ? t(error) : ""}</p>
    </div>
  )
}

export default Date