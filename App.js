import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainProvider } from './Context/MainContext';

import MainComp from './Components/MainComp';

const App = () => {
  return (
    <MainProvider>
      <MainComp />
    </MainProvider>
  );
};
export default App;
