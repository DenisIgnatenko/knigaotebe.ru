import React from "react";
import Header from "./components/Layout/Header";
import FormatSelectionPage from "./components/FormatSelectionPage/FormatSelectionPage";
import NavigationStepsContainer from "./components/Layout/NavigationStepsContainer";
import Footer from "./components/Layout/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <NavigationStepsContainer />
      <FormatSelectionPage />
      <Footer />
    </>
  );
};

export default App;
