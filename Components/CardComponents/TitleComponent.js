import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TitleComponent = ({ title, sunday, date }) => {
  return (
    <View style={styles.row}>
      <View style={styles.smallCol}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subTitleText}>{date}</Text>
        <Text style={styles.subTitleText}>{sunday}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Note add fonts!
  row: {
    width: '100%',
    paddingHorizontal: 10,

    backgroundColor: '#6e487e',
    borderRadius: 5,
    paddingVertical: 10,
    textAlign: 'center',
  },
  smallCol: {},

  titleText: {
    lineHeight: 26,
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    textTransform: 'capitalize',
  },
  subTitleText: {
    lineHeight: 26,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
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

export default TitleComponent;

//                <AntDesign name="questioncircle" style={styles.icon} />
