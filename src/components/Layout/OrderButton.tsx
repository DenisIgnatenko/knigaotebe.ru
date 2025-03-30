import React from "react";
import styles from "./Layout.module.scss";

const orderIcon = new URL("../../images/ordericon.svg", import.meta.url).href;

interface Props {
  onClick?: () => void;
}

const OrderButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.orderButtonWrapper}>
      <button className={styles.orderButton}>
        <img alt="" className={styles.orderIcon} />
        Оформить заказ
      </button>
    </div>
  );
};

export default OrderButton;
