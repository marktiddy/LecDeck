import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

const BibleComponent = ({ urlBibleVerse, reading }) => {
  //Note URL 2 is currently active and doesnt use bible gateway
  const url2 = `https://www.biblestudytools.com/passage/?q=${reading}`;

  const url = `https://classic.biblegateway.com/passage/?search=${urlBibleVerse}&version=NIV`;
  return (
    // <View style={{ height: Platform.OS === 'ios' ? 500 : 2500 }}>
    <View style={{ height: '95%' }}>
      <WebView
        source={{ uri: url2 }}
        keyboardDisplayRequiresUserAction={false}
      />
    </View>
  );
};

export default BibleComponent;
