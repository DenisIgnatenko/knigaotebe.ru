import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const isRussian = i18n.language === "ru";

  const toggleLanguage = () => {
    const newLang = isRussian ? "en" : "ru";
    i18n.changeLanguage(newLang).catch(console.error);
  };

  return (
    <div className={styles.switchWrapper} onClick={toggleLanguage}>
      <div className={styles.slider + (isRussian ? ` ${styles.left}` : ` ${styles.right}`)}>
        {isRussian ? "RU" : "EN"}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
