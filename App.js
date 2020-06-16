import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainProvider } from './Context/MainContext';

import * as Sentry from 'sentry-expo';

import MainComp from './Components/MainComp';

Sentry.init({
  dsn:
    'https://2d205916c3ca4e629cc5bfdfca1e2315@o407062.ingest.sentry.io/5275587',
  enableInExpoDevelopment: true,
  debug: true,
});

const App = () => {
  return (
    <MainProvider>
      <MainComp />
    </MainProvider>
  );
};
export default App;
