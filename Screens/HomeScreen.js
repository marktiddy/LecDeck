import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Title from '../Components/Title';
import { MainContext } from '../Context/MainContext';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

const HomeScreen = ({ navigation }) => {
  const {
    appData,
    lectionary,
    error,

    currentSundayIndex,
  } = useContext(MainContext);

  const loadMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <Title loadMenu={loadMenu} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={[styles.text, styles.welcome]}>Welcome to LecDeck</Text>
          <Text style={styles.text}>
            The LecDeck app can be used in a variety of settings with young
            people on Sunday mornings, the basis for group sessions and Bible
            Study, enjoyed by families as a fun way to engage with scripture, or
            used by young people on their own.
          </Text>
          <View style={styles.spacer} />
          <Text style={[styles.text, styles.welcome, styles.blackText]}>
            Each session contains:
          </Text>
          <View style={[styles.info, styles.bgPink]}>
            <AntDesign name="questioncircle" style={styles.icon} />
            <Text style={[styles.text, styles.whiteText]}>
              Thought provoking questions
            </Text>
          </View>
          <View style={[styles.info, styles.bgBlue]}>
            <FontAwesome5 name="cross" style={styles.icon} />
            <Text style={[styles.text, styles.whiteText]}>Prayer focus</Text>
          </View>
          <View style={[styles.info, styles.bgGreen]}>
            <Ionicons name="ios-arrow-forward" style={styles.icon} />
            <Text style={[styles.text, styles.whiteText]}>
              Weekly challenge
            </Text>
          </View>
          <View style={[styles.info, styles.bgRed]}>
            <FontAwesome5 name="bible" style={styles.icon} />
            <Text style={[styles.text, styles.whiteText]}>
              Bible reading from the Lectionary
            </Text>
          </View>
          <View style={[styles.info, styles.bgYellow]}>
            <FontAwesome5 name="quote-left" style={styles.icon} />
            <Text style={[styles.text, styles.whiteText]}>Quotable quotes</Text>
          </View>
          <View style={styles.spacer} />
          <Text style={styles.text}>
            The lectionary year begins at the start of Advent. All readings are
            selected from the principal service for each Sunday.
          </Text>
          <View style={styles.spacer} />
          <View style={styles.baseInfo}>
            <Text style={styles.baseInfoText}>
              This Sunday:{' '}
              {moment(lectionary.dates[currentSundayIndex])
                .isoWeekday(7)
                .format('Do MMM YYYY')}
            </Text>

            <Text style={styles.baseInfoText}>
              {appData[currentSundayIndex].sunday}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  spacer: {
    height: 20,
  },
  scrollView: {
    marginTop: 10,
  },
  welcome: {
    color: '#1C3B98',
    marginBottom: 14,
    fontSize: 22,
    textAlign: 'center',
  },
  text: {
    lineHeight: 26,
    fontSize: 18,
    textAlign: 'center',
  },
  green: {
    color: '#93C524',
  },
  info: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgPink: {
    backgroundColor: '#AF0834',
  },
  bgGreen: {
    backgroundColor: '#93C524',
  },
  bgBlue: {
    backgroundColor: '#1C3B98',
  },
  bgRed: {
    backgroundColor: '#840F2E',
  },
  bgYellow: {
    backgroundColor: '#E4A62D',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  icon: {
    marginRight: 10,
    color: 'white',
    fontSize: 20,
    lineHeight: 22,
  },
  baseInfo: {
    backgroundColor: '#6e487e',
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 8,
  },
  baseInfoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default HomeScreen;
