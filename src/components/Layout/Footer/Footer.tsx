import React from "react";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>{t("footer.copyright")}</div>
        <div className={styles.right}>
          <a href="#" className={styles.link}>
            {t("footer.privacyPolicy")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
