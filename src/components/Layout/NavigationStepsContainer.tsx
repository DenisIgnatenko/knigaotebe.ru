import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { goToStep, OrderStep } from "../../redux/bookConfigSlice/orderSlice"; // импортируй тип
import NavigationSteps from "./NavigationSteps";

interface Step {
  key: OrderStep;
  label: string;
  icon: string;
}

const characterIcon = new URL("../../images/charactericon.svg", import.meta.url).href;
const uploadIcon = new URL("../../images/uploadicon.svg", import.meta.url).href;
const bookCreationIcon = new URL("../../images/bookcreationicon.svg", import.meta.url).href;
const formatIcon = new URL("../../images/formatselectionicon.svg", import.meta.url).href;
const doneIcon = new URL("../../images/doneicon.svg", import.meta.url).href;

const stepOrder = ["character", "upload", "preview", "format", "done"] as const;

const NavigationStepsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: RootState) => state.order.step);
  const stepIndex = stepOrder.indexOf(currentStep);
  const { t } = useTranslation();

  const steps: Step[] = [
    { key: "character", label: t("navigation.characterCreation"), icon: characterIcon },
    { key: "upload", label: t("navigation.photoUpload"), icon: uploadIcon },
    { key: "preview", label: t("navigation.bookCreation"), icon: bookCreationIcon },
    { key: "format", label: t("navigation.formatSelection"), icon: formatIcon },
    { key: "done", label: t("navigation.bookReady"), icon: doneIcon }
  ];

  const handleStepChange = (index: number) => {
    dispatch(goToStep(steps[index].key));
  };

  return <NavigationSteps currentStep={stepIndex} onStepChange={handleStepChange} steps={steps} />;
};

export default NavigationStepsContainer;
