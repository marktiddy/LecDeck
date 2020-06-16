import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const WeekComponent = ({ week, year }) => {
  return (
    <View style={styles.row}>
      <View style={styles.smallCol}>
        <Text style={styles.text}>
          {' '}
          This is week {week} of year {year}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Note add fonts!
  row: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#840F2E',
    borderRadius: 5,
    paddingVertical: 0,
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

export default WeekComponent;

//                <AntDesign name="questioncircle" style={styles.icon} />
