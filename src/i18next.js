import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import meJSON from "./locals/me.json"
import enJSON from "./locals/en.json"

i18n.use(initReactI18next).init({
 resources: {
    me:{...meJSON}, en:{...enJSON}
 }, // Where we're gonna put translations' files
 lng: "en",     // Set the initial language of the App
});

export default i18n