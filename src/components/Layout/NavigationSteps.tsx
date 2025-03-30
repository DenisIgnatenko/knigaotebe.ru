import React from "react";
import styles from "./Layout.module.scss";
import classNames from "classnames";

const characterIcon = new URL("../../images/charactericon.svg", import.meta.url).href;
const uploadIcon = new URL("../../images/uploadicon.svg", import.meta.url).href;
const bookCreationIcon = new URL("../../images/bookcreationicon.svg", import.meta.url).href;
const formatIcon = new URL("../../images/formatselectionicon.svg", import.meta.url).href;
const doneIcon = new URL("../../images/doneicon.svg", import.meta.url).href;

interface Step {
  label: string;
  icon: string;
}

interface Props {
  currentStep: number;
  onStepChange: (index: number) => void;
}

const steps = [
  { label: "Создание персонажа", icon: characterIcon },
  { label: "Загрузка фото", icon: uploadIcon },
  { label: "Создание книги", icon: bookCreationIcon },
  { label: "Выбор формата", icon: formatIcon },
  { label: "Книга готова", icon: doneIcon },
];

const NavigationSteps: React.FC<Props> = ({ currentStep, onStepChange }) => {
  return (
    <nav className={styles.stepsNav}>
      {steps.map((step, index) => (
        <button
          key={index}
          className={classNames(styles.step, {
            [styles.active]: index === currentStep,
            [styles.completed]: index < currentStep,
            [styles.lastCompleted]: index === currentStep,
          })}
          onClick={() => onStepChange(index)}
        >
          <img src={step.icon} alt="" className={styles.stepIcon} />
          {step.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationSteps;
