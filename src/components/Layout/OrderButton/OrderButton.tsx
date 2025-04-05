import React from "react";
import styles from "./OrderButton.module.scss";
import { useTranslation } from "react-i18next";

interface Props {
  onClick?: () => void;
}

const placeOrderIcon = new URL("../../../images/placeOrderIcon.svg", import.meta.url).href;

const OrderButton: React.FC<Props> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.orderButtonWrapper} onClick={onClick}>
      <button className={styles.orderButton}>
        {t("order.placeOrder")}
        <img src={placeOrderIcon} alt="Разместить заказ" className={styles.orderIcon} />
      </button>
    </div>
  );
};

export default OrderButton;
