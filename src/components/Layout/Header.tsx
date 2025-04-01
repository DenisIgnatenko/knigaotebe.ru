import React, { useState } from "react";
import styles from "./Layout.module.scss";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const logo = new URL("../../images/logo.svg", import.meta.url).href;
const orderIcon = new URL("../../images/ordericon.svg", import.meta.url).href;
const burgerIcon = new URL("../../images/burgericon.svg", import.meta.url).href;
const cartIcon = new URL("../../images/carticon.svg", import.meta.url).href;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => setIsMenuOpen(false);
  const { t } = useTranslation();

  return (
    <header>
      <div className={styles.mobileHeader}>
        <button className={styles.iconButton}>
          <img src={cartIcon} alt="" />
        </button>

        <div className={styles.centerLogo}>
          <img src={logo} alt="" />
        </div>

        <button
          className={styles.iconButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label=""
        >
          <img src={burgerIcon} alt="menu" />
        </button>
      </div>

      <div className={styles.desktopHeader}>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>

          <nav className={styles.topNavDesktop}>
            <ul>
              <li>
                <a href="#">{t("menu.catalog")}</a>
              </li>
              <li>
                <a href="#">{t("menu.themes")}</a>
              </li>
              <li>
                <a href="#">{t("menu.children")}</a>
              </li>
              <li>
                <a href="#">{t("menu.adults")}</a>
              </li>
              <li>
                <a href="#">{t("menu.contacts")}</a>
              </li>
            </ul>
          </nav>
          <div className={styles.orderButtonWrapper}>
            <LanguageSwitcher />
            <button className={styles.orderButton}>
              <img src={orderIcon} alt="" />
              {t("order.button")}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={styles.topNavMobile}>
          <ul>
            <li>
              <a href="#" onClick={handleLinkClick}>
                {t("menu.catalog")}
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                {t("menu.themes")}
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                {t("menu.children")}
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                {t("menu.adults")}
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                {t("menu.contacts")}
              </a>
            </li>
          </ul>
          <div className={styles.mobileLangSwitcher}>
            <LanguageSwitcher />
          </div>
          <button className={styles.orderButton}>
            <img src={orderIcon} alt="" className={styles.orderIcon} />
            {t("order.button")}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
