import React from "react";
import { BookFormat } from "../../redux/bookConfigSlice/types";
import styles from "./BookFormatCard.module.scss";
import classNames from "classnames";

interface Props {
  format: BookFormat;
  selected: boolean;
  onSelect: () => void;
}

const BookFormatCard: React.FC<Props> = ({ format, selected, onSelect }) => {
  return (
    <div
      className={classNames(styles.card, { [styles.selected]: selected })}
      onClick={onSelect}
    >
      {format.isBestSeller && <div className={styles.badge}>Бестселлер</div>}
      <img
        src={`/images/${format.image}`}
        alt={format.title}
        className={styles.image}
      />
      <div className={styles.title}>{format.title}</div>
      <div className={styles.size}>{format.size}</div>
      <div className={styles.price}>
        {format.price.toLocaleString("ru-RU")} ₽
      </div>
      <button className={styles.detailsBtn}>?</button>
    </div>
  );
};

export default BookFormatCard;
