import React, { useState } from "react";
import Header from "./components/Layout/Header";
import NavigationSteps from "./components/Layout/NavigationSteps";
import FormatSelectionPage from "./components/FormatSelectionPage/FormatSelectionPage";
import OrderButton from "./components/Layout/OrderButton";

const steps = [
  "Создание персонажа",
  "Загрузка фото",
  "Создание книги",
  "Выбор формата",
  "Книга готова",
];

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(3); // "Выбор формата"

  return (
    <>
      <Header />
      <NavigationSteps
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
      <FormatSelectionPage />
      <OrderButton onClick={() => console.log("Оформить заказ")} />
    </>
  );
};

export default App;
