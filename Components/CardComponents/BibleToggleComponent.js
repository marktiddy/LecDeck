import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const BibleToggleComponent = ({ reading, toggleVerse, urlBibleVerse }) => {
  return (
    <>
      <TouchableOpacity onPress={() => toggleVerse()} activeOpacity={0.9}>
        <View style={styles.row}>
          <View style={styles.smallCol}>
            <FontAwesome5 name="bible" style={styles.icon} />
          </View>
          <View style={styles.largeCol}>
            <Text style={styles.text}>Reading: {reading}</Text>
            <Text style={[styles.text, styles.subText]}>
              Click to open verse
            </Text>
            <Text style={[styles.text, styles.subText, ,]}>
              (Internet connection required)
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
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
    backgroundColor: '#840F2E',
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
    fontWeight: '700',
  },
  subText: {
    fontStyle: 'italic',
    fontWeight: '500',
  },
  icon: {
    paddingTop: 5,
    marginRight: 10,
    color: 'white',
    fontSize: 35,
    lineHeight: 35,
    marginLeft: 15,
  },
  general: {
    backgroundColor: '#840F2E',
  },
  allBorder: {
    borderRadius: 5,
  },
});

export default BibleToggleComponent;
