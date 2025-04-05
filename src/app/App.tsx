import React from "react";
import Header from "../components/Layout/Header/Header";
import FormatSelectionPage from "../components/FormatSelectionPage/FormatSelectionPage";
import NavigationStepsContainer from "../components/Layout/NavigationSteps/NavigationStepsContainer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <NavigationStepsContainer />
      <FormatSelectionPage />
    </>
  );
};

export default App;
