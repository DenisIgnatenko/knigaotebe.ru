import React from "react";
import styles from "./Layout.module.scss";

interface Props {
  onClick?: () => void;
}

const placeOrderIcon = new URL("../../images/placeOrderIcon.svg", import.meta.url).href;

const OrderButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.orderButtonWrapper} onClick={onClick}>
      <button className={styles.orderButton}>
        Оформить заказ
        <img src={placeOrderIcon} alt="Разместить заказ" className={styles.orderIcon} />
      </button>
    </div>
  );
};

export default OrderButton;
