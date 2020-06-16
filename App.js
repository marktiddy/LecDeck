import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainProvider } from './Context/MainContext';
import { sentKey } from './keys/sentry';
import * as Sentry from 'sentry-expo';

import MainComp from './Components/MainComp';

Sentry.init({
  dsn: sentKey,
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
