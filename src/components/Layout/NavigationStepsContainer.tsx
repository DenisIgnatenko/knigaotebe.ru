import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { goToStep } from "../../redux/bookConfigSlice/orderSlice";
import NavigationSteps from "./NavigationSteps";

const characterIcon = new URL("../../images/charactericon.svg", import.meta.url).href;
const uploadIcon = new URL("../../images/uploadicon.svg", import.meta.url).href;
const bookCreationIcon = new URL("../../images/bookcreationicon.svg", import.meta.url).href;
const formatIcon = new URL("../../images/formatselectionicon.svg", import.meta.url).href;
const doneIcon = new URL("../../images/doneicon.svg", import.meta.url).href;

const stepOrder = ["character", "upload", "preview", "format", "done"] as const;

const steps = [
  { label: "Создание персонажа", icon: characterIcon },
  { label: "Загрузка фото", icon: uploadIcon },
  { label: "Создание книги", icon: bookCreationIcon },
  { label: "Выбор формата", icon: formatIcon },
  { label: "Книга готова", icon: doneIcon }
];

const NavigationStepsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: RootState) => state.order.step);

  const stepIndex = stepOrder.indexOf(currentStep);

  const handleStepChange = (index: number) => {
    dispatch(goToStep(stepOrder[index]));
  };

  return <NavigationSteps currentStep={stepIndex} onStepChange={handleStepChange} steps={steps} />;
};

export default NavigationStepsContainer;
