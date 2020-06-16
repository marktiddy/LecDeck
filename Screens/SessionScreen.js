import React, { useContext, useState } from 'react';
import { MainContext } from '../Context/MainContext';
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Title from '../Components/Title';
import moment from 'moment';

//Import our components
import TitleComponent from '../Components/CardComponents/TitleComponent';
import DiscussComponent from '../Components/CardComponents/DiscussComponent';
import PrayerComponent from '../Components/CardComponents/PrayerComponent';
import ChallengeComponent from '../Components/CardComponents/ChallengeComponent';
import QuoteComponent from '../Components/CardComponents/QuoteComponent';
import WeekComponent from '../Components/CardComponents/WeekComponent';
import BibleComponent from '../Components/CardComponents/BibleComponent';
import BibleToggleComponent from '../Components/CardComponents/BibleToggleComponent';

const SessionScreen = ({ navigation, route }) => {
  const { appData, lectionary } = useContext(MainContext);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  let { sundayIndex } = route.params;

  const loadMenu = () => {
    navigation.toggleDrawer();
  };
  //If it doesn't return a 'this material is coming soon
  //NOTE - This will probably break in 6 years!
  //For logic - years with 53 Sundays - 2023,
  //Check our week exists
  if (appData[sundayIndex]) {
    //This week exists
  } else if (sundayIndex >= 156) {
    //We're at least 3 years in the future
    //nexted if for some checks
    if (sundayIndex >= 156 && sundayIndex < 312) {
      sundayIndex = sundayIndex - 156;
    } else if (sundayIndex >= 312 && sundayIndex < 469) {
      sundayIndex = sundayIndex - 312;
    }
  } else {
    //This week doesn't exist yet
    return (
      <>
        <Title loadMenu={loadMenu} />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.welcome}>
              Sorry. The material you're looking for isn't available yet!
            </Text>
            <View style={styles.spacer}></View>
            <Text style={styles.welcome}>Please try an earlier date</Text>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
  const {
    week,
    year,
    title,
    sunday,
    challenge,
    prayer,
    quoteAuthor,
    quoteContent,
    reading,
    thought,
    urlBibleVerse,
  } = appData[sundayIndex];

  return (
    <>
      <Title loadMenu={loadMenu} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} scrollEnabled={scrollEnabled}>
          <TitleComponent sunday={sunday} title={title} />
          <View style={styles.spacer} />
          <DiscussComponent thought={thought} />
          <View style={styles.spacer} />
          <PrayerComponent prayer={prayer} />
          <View style={styles.spacer} />
          <ChallengeComponent challenge={challenge} />
          <View style={styles.spacer} />
          <QuoteComponent
            quoteAuthor={quoteAuthor}
            quoteContent={quoteContent}
          />

          <View style={styles.spacer} />
          <BibleToggleComponent
            reading={reading}
            urlBibleVerse={urlBibleVerse}
            navigation={navigation}
          />
          <View style={styles.spacer} />

          <WeekComponent week={week} year={year} />
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
  scrollView: {
    marginTop: 10,
  },
  welcome: {
    color: '#1C3B98',
    marginBottom: 14,
    fontSize: 22,
    textAlign: 'center',
  },
  spacer: {
    height: 10,
  },
  text: {
    lineHeight: 26,
    fontSize: 18,
    textAlign: 'center',
  },
  redText: {
    color: '#840F2E',
  },
  purpleText: {
    color: '#6e487e',
    fontSize: 20,
    fontWeight: '500',
    marginTop: -10,
    marginBottom: 20,
  },
});

export default SessionScreen;
