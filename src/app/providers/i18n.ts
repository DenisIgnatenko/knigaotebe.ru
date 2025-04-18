import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "@/shared/config/i18n";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {})
  .catch(error => {
    console.error("i18n init error: ", error);
  });

export default i18n;
