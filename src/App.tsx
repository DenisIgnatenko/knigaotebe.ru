import React, { useState } from "react";
import Header from "./components/Layout/Header";
import NavigationSteps from "./components/Layout/NavigationSteps";
import FormatSelectionPage from "./components/FormatSelectionPage/FormatSelectionPage";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <>
      <Header />
      <NavigationSteps currentStep={currentStep} onStepChange={setCurrentStep} />
      <FormatSelectionPage />
    </>
  );
};

export default App;
