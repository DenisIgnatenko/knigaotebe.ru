import React from "react";
import { BookFormat } from "@/entities/book";
import styles from "./BookFormatCard.module.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

interface Props {
  format: BookFormat;
  selected: boolean;
  onSelect: () => void;
  onOpenModal?: () => void;
}

const BookFormatCard: React.FC<Props> = ({ format, selected, onSelect, onOpenModal }) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(styles.card, { [styles.selected]: selected })}
      onClick={event => {
        event.stopPropagation();
        onSelect();
      }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={new URL(format.image, import.meta.url).href}
          alt={format.title}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.headerRow}>
          <div className={styles.title}>{t(format.title)}</div>
          <button
            className={styles.detailsBtn}
            onClick={event => {
              event.stopPropagation();
              onOpenModal?.();
            }}
          >
            i
          </button>
        </div>

        <div className={styles.description}>{t(format.shortDescription)}</div>

        <div className={styles.bottomRow}>
          <div className={styles.size}>{t(`formats.${format.id}.size`)}</div>
          <div className={styles.price}>{t(`formats.${format.id}.price`)}</div>
        </div>
      </div>
    </div>
  );
};

export default BookFormatCard;
