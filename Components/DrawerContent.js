import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { MainContext } from '../Context/MainContext';
import moment from 'moment';
import DateComponent from './DateComponent';

const DrawerContent = (props) => {
  const { lectionary, currentSundayIndex } = useContext(MainContext);
  const [weeksAhead, setWeeksAhead] = useState(20);
  const [showWeeksAhead, setShowWeeksAhead] = useState(true);
  const dateItems = [];

  //Set up our date items
  if (currentSundayIndex !== 3000) {
    for (
      var i = currentSundayIndex - 1;
      i <= currentSundayIndex + weeksAhead;
      i++
    ) {
      if (i === currentSundayIndex - 1) {
        //Last Sunday
        dateItems.push(
          <DateComponent
            date="Last Sunday"
            sundayIndex={i}
            key={i}
            props={props}
          />
        );
      } else if (i === currentSundayIndex) {
        //This Sunday
        dateItems.push(
          <DateComponent
            date="This Sunday"
            sundayIndex={i}
            key={i}
            props={props}
          />
        );
      } else {
        //Other Sunday in the future
        dateItems.push(
          <DateComponent
            date={moment(lectionary.dates[i])
              .isoWeekday(7)
              .format("ddd Do MMMM 'YY")}
            sundayIndex={i}
            key={i}
            props={props}
          />
        );
      }
    }
  }

  if (weeksAhead > 100) {
    setShowWeeksAhead(false);
  }

  if (!dateItems) {
    return <Text>Menu Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={[
            styles.closeButton,
            Platform.OS === 'ios' ? styles.closeButtonIos : styles.closeButtonA,
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          >
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={[styles.main, Platform.OS === 'ios' ? null : styles.mainA]}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <View style={styles.customItem}>
              <AntDesign name="home" style={styles.customItemIcon} />
              <Text style={styles.customItemText}>Home</Text>
            </View>
          </TouchableOpacity>
          {dateItems}
          {showWeeksAhead ? (
            <TouchableOpacity onPress={() => setWeeksAhead(weeksAhead + 10)}>
              <View style={styles.customItem}>
                <FontAwesome
                  name="refresh"
                  style={[styles.customItemIcon, styles.redText]}
                />
                <Text style={[styles.customItemText, styles.redText]}>
                  Load more dates...
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomArea}>
        <Text style={styles.bottomAreaText}>
          LecDeck was created by the Diocese of Bath and Wells and the Diocese
          of Bristol. App created by Mark Tiddy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C3B98',
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  bottomArea: {
    color: 'white',
    margin: 5,
  },
  bottomAreaText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  closeButtonIos: {
    marginTop: 12,
  },
  closeButtonA: {
    marginTop: -6,
  },
  main: {
    marginTop: 10,
    color: 'black',
  },
  mainA: {
    marginTop: 18,
  },
  titleArea: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  item: {
    fontSize: 50,
    backgroundColor: 'white',
    color: 'black',
  },
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
    color: '#1C3B98',
    fontSize: 16,
  },
  redText: {
    color: '#AF0834',
  },
  customItemIcon: {
    color: '#1C3B98',
    fontSize: 24,
    marginRight: 20,
  },
});

export default DrawerContent;
