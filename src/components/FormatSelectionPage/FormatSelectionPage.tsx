import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  closeModal,
  fetchFormatsRequest,
  openModal,
  selectFormat
} from "../../redux/bookConfigSlice/bookConfigSlice";
import BookFormatCard from "./BookFormatCard";
import styles from "./FormatSelectionPage.module.scss";
import BookFormatModal from "./BookFormatModal";
import OrderButton from "../Layout/OrderButton";
import classNames from "classnames";
import { goToStep, saveOrderFormat } from "../../redux/bookConfigSlice/orderSlice";
import { useTranslation } from "react-i18next";

const FormatSelectionPage: React.FC = () => {
  const dispatch = useDispatch();
  const formats = useSelector((state: RootState) => state.bookConfig.formats);
  const selectedId = useSelector((state: RootState) => state.bookConfig.selectedFormatId);
  const modalFormatId = useSelector((state: RootState) => state.bookConfig.modalFormatId);
  const modalFormat = formats.find(f => f.id === modalFormatId);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFormatsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (infoMessage) {
      const timeout = setTimeout(() => {
        setInfoMessage(null);
        setMessageType(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [infoMessage]);

  return (
    <div className={styles.page} onClick={() => dispatch(selectFormat(null))}>
      <h1 className={styles.title}>{t("formatSelection.title")}</h1>
      <p className={styles.subtitle}>{t("formatSelection.subtitle")}</p>
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {formats.map(format => (
            <BookFormatCard
              key={format.id}
              format={format}
              selected={format.id === selectedId}
              onSelect={() => {
                dispatch(selectFormat(format.id));
              }}
              onOpenModal={() => dispatch(openModal(format.id))}
            />
          ))}
        </div>
      </div>
      <div className={styles.orderButtonContainer}>
        <OrderButton
          onClick={() => {
            if (!selectedId) {
              setInfoMessage(t("messages.selectFormat"));
              setMessageType("error");
            } else {
              const selected = formats.find(format => format.id === selectedId);
              setInfoMessage(
                t("messages.formatSelected", {
                  format: t(`formats.${selected?.id}.title`)
                })
              );
              setMessageType("success");
              dispatch(saveOrderFormat(selectedId));
              dispatch(goToStep("done"));
            }
          }}
        />
        {infoMessage && (
          <div
            className={classNames(styles.infoMessage, {
              [styles.error]: messageType === "error",
              [styles.success]: messageType === "success"
            })}
          >
            {infoMessage}
          </div>
        )}
      </div>
      {modalFormat && (
        <BookFormatModal format={modalFormat} onClose={() => dispatch(closeModal())} />
      )}
    </div>
  );
};

export default FormatSelectionPage;
