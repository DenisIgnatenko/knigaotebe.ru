import React from "react";
import styles from "./BookFormatModal.module.scss";
import { BookFormat } from "../../redux/bookConfigSlice/types";

interface Props {
  format: BookFormat;
  onClose: () => void;
}

const formatIcons: Record<string, string> = {
  economy: new URL("../../images/economyModalIcon.svg", import.meta.url).href,
  standard: new URL("../../images/standardModalIcon.svg", import.meta.url).href,
  premium: new URL("../../images/premiumModalIcon.svg", import.meta.url).href
};

const BookFormatModal: React.FC<Props> = ({ format, onClose }) => {
  const iconUrl = formatIcons[format.id];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>{format.title}</h2>
          <img src={iconUrl} alt="" className={styles.modalIcon} />
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
              <div className={styles.property}>
                <span className={styles.label}>Тип обложки:</span>
                <span className={styles.value}>{format.details.cover.type}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>Материал:</span>
                <span className={styles.value}>{format.details.cover.material}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>Печать:</span>
                <span className={styles.value}>{format.details.cover.print}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>Переплет:</span>
                <span className={styles.value}>{format.details.cover.binding}</span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Страницы</h3>
              <div className={styles.property}>
                <span className={styles.label}>Материал:</span>
                <span className={styles.value}>{format.details.pages.material}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>Печать:</span>
                <span className={styles.value}>{format.details.pages.print}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFormatModal;
