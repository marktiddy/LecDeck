import React from "react";
import { MainProvider } from "./Context/MainContext";

import MainComp from "./Components/MainComp";

const App = () => {
  return (
    <MainProvider>
      <MainComp />
    </MainProvider>
  );
};
export default App;
