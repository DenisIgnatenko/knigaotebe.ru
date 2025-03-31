import React from "react";
import styles from "./BookFormatModal.module.scss";
import { BookFormat } from "../../redux/bookConfigSlice/types";

interface Props {
  format: BookFormat;
  onClose: () => void;
}

const BookFormatModal: React.FC<Props> = ({ format, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>{format.title}</h2>
          <div className={styles.icon} />
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <p className={styles.description}>{format.details.description}</p>
            <img
              src={new URL(format.image, import.meta.url).href}
              alt={format.title}
              className={styles.photo}
            />
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Обложка</h3>
              <ul>
                <li>
                  <b>Тип обложки:</b> {format.details.cover.type}
                </li>
                <li>
                  <b>Материал:</b> {format.details.cover.material}
                </li>
                <li>
                  <b>Печать:</b> {format.details.cover.print}
                </li>
                <li>
                  <b>Переплет:</b> {format.details.cover.binding}
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Страницы</h3>
              <ul>
                <li>
                  <b>Материал:</b> {format.details.pages.material}
                </li>
                <li>
                  <b>Печать:</b> {format.details.pages.print}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFormatModal;
