import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  closeModal,
  fetchFormatsRequest,
  openModal,
  selectFormat,
} from "../../redux/bookConfigSlice/bookConfigSlice";
import BookFormatCard from "./BookFormatCard";
import styles from "./FormatSelectionPage.module.scss";
import BookFormatModal from "./BookFormatModal";

const FormatSelectionPage: React.FC = () => {
  const dispatch = useDispatch();
  const formats = useSelector((state: RootState) => state.bookConfig.formats);
  const selectedId = useSelector((state: RootState) => state.bookConfig.selectedFormatId);
  const modalFormatId = useSelector((state: RootState) => state.bookConfig.modalFormatId);
  const modalFormat = formats.find((f) => f.id === modalFormatId);

  useEffect(() => {
    dispatch(fetchFormatsRequest());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Выберите формат для своей книги</h1>
      <p className={styles.subtitle}>Мы предлагаем три варианта размера книги.</p>
      <div className={styles.grid}>
        {formats.map((format) => (
          <BookFormatCard
            key={format.id}
            format={format}
            selected={format.id === selectedId}
            onSelect={() => dispatch(selectFormat(format.id))}
            onOpenModal={() => dispatch(openModal(format.id))}
          />
        ))}
      </div>
      {modalFormat && (
        <BookFormatModal format={modalFormat} onClose={() => dispatch(closeModal())} />
      )}
    </div>
  );
};

export default FormatSelectionPage;
