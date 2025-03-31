import React from "react";
import styles from "./Layout.module.scss";

interface Props {
  onClick?: () => void;
}

const OrderButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.orderButtonWrapper} onClick={onClick}>
      <button className={styles.orderButton}>
        <img alt="" className={styles.orderIcon} />
        Оформить заказ
      </button>
    </div>
  );
};

export default OrderButton;
