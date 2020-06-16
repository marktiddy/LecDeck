import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const QuoteComponent = ({ quoteAuthor, quoteContent }) => {
  return (
    <View style={styles.row}>
      <View style={styles.smallCol}>
        <FontAwesome5 name="quote-left" style={styles.icon} />
      </View>
      <View style={styles.largeCol}>
        <Text style={styles.text}>"{quoteContent}"</Text>
        <Text style={[styles.text, styles.authorText]}>{quoteAuthor}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 10,
    lineHeight: 26,
    fontSize: 18,
    backgroundColor: '#E4A62D',
    borderRadius: 5,
    paddingVertical: 10,
  },
  smallCol: {
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  largeCol: {
    flexDirection: 'column',
    flex: 4,
    paddingRight: 5,
  },
  colDiv: {
    flexDirection: 'row',
  },
  text: {
    lineHeight: 26,
    fontSize: 18,
    color: 'white',
  },
  authorText: {
    fontStyle: 'italic',
  },
  icon: {
    paddingTop: 5,
    marginRight: 10,
    color: 'white',
    fontSize: 35,
    lineHeight: 35,
    marginLeft: 15,
  },
});

export default QuoteComponent;

//                <AntDesign name="questioncircle" style={styles.icon} />
