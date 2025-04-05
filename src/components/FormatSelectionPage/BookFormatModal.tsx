import React from "react";
import styles from "./BookFormatModal.module.scss";
import { BookFormat } from "@/entities/book";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const iconUrl = formatIcons[format.id];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>{t(format.title)}</h2>
          <img src={iconUrl} alt="" className={styles.modalIcon} />
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <p className={styles.description}>{t(format.details.description)}</p>
            <img
              src={new URL(format.image, import.meta.url).href}
              alt={t(format.title)}
              className={styles.photo}
            />
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{t("bookDetails.cover")}</h3>
              <div className={styles.property}>
                <span className={styles.label}>{t("bookDetails.fields.coverType")}:</span>
                <span className={styles.value}>{t(format.details.cover.type)}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>{t("bookDetails.fields.coverMaterial")}:</span>
                <span className={styles.value}>{t(format.details.cover.material)}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>{t("bookDetails.fields.coverPrint")}:</span>
                <span className={styles.value}>{t(format.details.cover.print)}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>{t("bookDetails.fields.coverBinding")}:</span>
                <span className={styles.value}>{t(format.details.cover.binding)}</span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{t("bookDetails.pages")}</h3>
              <div className={styles.property}>
                <span className={styles.label}>{t("bookDetails.fields.pagesMaterial")}:</span>
                <span className={styles.value}>{t(format.details.pages.material)}</span>
              </div>
              <div className={styles.property}>
                <span className={styles.label}>{t("bookDetails.fields.pagesPrint")}:</span>
                <span className={styles.value}>{t(format.details.pages.print)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFormatModal;
