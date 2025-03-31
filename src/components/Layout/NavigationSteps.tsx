import React from "react";
import styles from "./Layout.module.scss";
import classNames from "classnames";

interface Step {
  label: string;
  icon: string;
}

interface Props {
  currentStep: number;
  onStepChange: (index: number) => void;
  steps: Step[];
}

const NavigationSteps: React.FC<Props> = ({ currentStep, onStepChange, steps }) => {
  return (
    <nav className={styles.stepsNav}>
      {steps.map((step, index) => (
        <button
          key={index}
          className={classNames(styles.step, {
            [styles.active]: index === currentStep,
            [styles.completed]: index < currentStep,
            [styles.lastCompleted]: index === currentStep
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
