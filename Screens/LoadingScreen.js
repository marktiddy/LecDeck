import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 14,
    padding: 20,
  },
});

export default LoadingScreen;
