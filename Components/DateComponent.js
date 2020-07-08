import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const DateComponent = ({ sundayIndex, date, props }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Session', {
          sundayIndex,
        });
      }}
    >
      <View style={styles.customItem}>
        <AntDesign name="calendar" style={styles.customItemIcon} />
        <Text style={styles.customItemText}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  customItemText: {
    color: '#212121',
    fontSize: 16,
  },
  customItemIcon: {
    color: '#212121',
    fontSize: 24,
    marginRight: 20,
  },
});

export default DateComponent;
