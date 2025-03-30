import React, { useState } from "react";
import styles from "./Layout.module.scss";

const logo = new URL("../../images/logo.svg", import.meta.url).href;
const orderIcon = new URL("../../images/ordericon.svg", import.meta.url).href;
const burgerIcon = new URL("../../images/burgericon.svg", import.meta.url).href;
const cartIcon = new URL("../../images/carticon.svg", import.meta.url).href;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header>
      <div className={styles.mobileHeader}>
        <button className={styles.iconButton} aria-label="Корзина">
          <img src={cartIcon} alt="Корзина" />
        </button>

        <div className={styles.centerLogo}>
          <img src={logo} alt="Книга о тебе" />
        </div>

        <button
          className={styles.iconButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          <img src={burgerIcon} alt="Меню" />
        </button>
      </div>

      <div className={styles.desktopHeader}>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="Книга о тебе" />
          </div>

          <nav className={styles.topNavDesktop}>
            <ul>
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">Темы и события</a>
              </li>
              <li>
                <a href="#">Для детей</a>
              </li>
              <li>
                <a href="#">Для взрослых</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>

          <div className={styles.orderButtonWrapper}>
            <button className={styles.orderButton}>
              <img src={orderIcon} alt="" />
              Заказать книгу
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={styles.topNavMobile}>
          <ul>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Темы и события
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Для детей
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Для взрослых
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Контакты
              </a>
            </li>
          </ul>
          <button className={styles.orderButton}>
            <img src={orderIcon} alt="" className={styles.orderIcon} />
            Заказать книгу
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
