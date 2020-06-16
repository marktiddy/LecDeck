import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

const BibleComponent = ({ urlBibleVerse }) => {
  const url = `https://www.biblegateway.com/passage/?search=${urlBibleVerse}&version=NIV`;
  return (
    // <View style={{ height: Platform.OS === 'ios' ? 500 : 2500 }}>
    <View style={{ height: '95%' }}>
      <WebView
        source={{ uri: url }}
        keyboardDisplayRequiresUserAction={false}
      />
    </View>
  );
};

export default BibleComponent;
