import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const FullScreenVerse = ({ urlBibleVerse }) => {
  const url = `https://www.biblegateway.com/passage/?search=${urlBibleVerse}&version=NIV`;
  const [showView, setShowView] = useState(true);
  return <WebView source={{ uri: url }} style={{ marginTop: 20, flex: 1 }} />;
};

const styles = StyleSheet.create({
  //Note add fonts!
  row: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#840F2E',
    borderRadius: 5,
    paddingVertical: 10,
    textAlign: 'center',
  },

  text: {
    lineHeight: 26,
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default FullScreenVerse;
