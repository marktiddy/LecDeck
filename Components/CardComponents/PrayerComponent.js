import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const PrayerComponent = ({ prayer }) => {
  return (
    <View style={styles.row}>
      <View style={styles.smallCol}>
        <FontAwesome5 name="cross" style={styles.icon} />
      </View>
      <View style={styles.largeCol}>
        <Text style={styles.text}>{prayer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Note add fonts!
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 10,
    lineHeight: 26,
    fontSize: 18,
    backgroundColor: '#1C3B98',
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
  icon: {
    paddingTop: 5,
    marginRight: 10,
    color: 'white',
    fontSize: 35,
    lineHeight: 35,
    marginLeft: 15,
  },
});

export default PrayerComponent;

//                <AntDesign name="questioncircle" style={styles.icon} />
