import React, { useState } from "react";
import Header from "./components/Layout/Header";
import NavigationSteps from "./components/Layout/NavigationSteps";
import FormatSelectionPage from "./components/FormatSelectionPage/FormatSelectionPage";
import OrderButton from "./components/Layout/OrderButton";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <>
      <Header />
      <NavigationSteps currentStep={currentStep} onStepChange={setCurrentStep} />
      <FormatSelectionPage />
      <OrderButton onClick={() => console.log("Оформить заказ")} />
    </>
  );
};

export default App;
