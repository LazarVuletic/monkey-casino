import React, { useState } from "react";
import { data } from "../../data";
import FormFields from "../../FormFields";
import { StyledForm } from "./StyledForm";
import useCustomForm from "../../Hooks/useCustomForm";
import { useTranslation } from "react-i18next";

function LoginForm() {
  const {t} = useTranslation()
  const [step, setStep] = useState(1);
  const { handleChange, handleSubmit, handleBlur, values, errors, isLast } =
    useCustomForm(data, step, setStep);
  console.log(errors, "submituj");
  const submitForm = () => {
    handleSubmit();
  };
  return (
    <StyledForm>
      {!isLast ? (
        <>
          <div>
            <h1>{t("register")}</h1>
          </div>
          <div className="fields">
            {data.map((el) => {
              return (
                el.step === step && (
                  <FormFields
                    field={el}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                  />
                )
              );
            })}
          </div>
          <button
            onClick={() => submitForm()}
            disabled={Boolean(Object.keys(errors) > 0)}
          >
            {t("next_button")}
          </button>
        </>
      ) : (
        <div className="success-step">
          <h1 className="success-title">{t("success_title")}</h1>
          <div><img src="/monkey.png" alt="Monkey" /></div>
          <p className="success-message">{t("success_message")}</p>
        </div>
      )}
    </StyledForm>
  );
}

export default LoginForm;
