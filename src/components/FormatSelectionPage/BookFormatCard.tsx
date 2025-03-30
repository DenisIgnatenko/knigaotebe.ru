import React from "react";
import { BookFormat } from "../../redux/bookConfigSlice/types";
import styles from "./BookFormatCard.module.scss";
import classNames from "classnames";

interface Props {
  format: BookFormat;
  selected: boolean;
  onSelect: () => void;
  onOpenModal?: () => void;
}

const BookFormatCard: React.FC<Props> = ({ format, selected, onSelect, onOpenModal }) => {
  return (
    <div className={classNames(styles.card, { [styles.selected]: selected })} onClick={onSelect}>
      <div className={styles.imageWrapper}>
        <img
          src={new URL(format.image, import.meta.url).href}
          alt={format.title}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.headerRow}>
          <div className={styles.title}>{format.title}</div>
          <button
            className={styles.detailsBtn}
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal?.();
            }}
          >
            i
          </button>
        </div>

        <div className={styles.description}>{format.shortDescription}</div>

        <div className={styles.bottomRow}>
          <div className={styles.size}>{format.size}</div>
          <div className={styles.price}>{format.price.toLocaleString("ru-RU")} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default BookFormatCard;
