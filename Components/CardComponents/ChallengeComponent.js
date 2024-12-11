import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChallengeComponent = ({ challenge }) => {
  return (
    <View style={styles.row}>
      <View style={styles.smallCol}>
        <Ionicons name="arrow-forward" style={styles.icon} />
      </View>
      <View style={styles.largeCol}>
        <Text style={styles.text}>{challenge}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Note add fonts!
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 10,
    lineHeight: 26,
    fontSize: 18,
    backgroundColor: "#93C524",
    borderRadius: 5,
    paddingVertical: 10,
  },
  smallCol: {
    flexDirection: "column",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  largeCol: {
    flexDirection: "column",
    flex: 4,
    paddingRight: 5,
  },
  text: {
    lineHeight: 26,
    fontSize: 18,
    color: "white",
  },
  icon: {
    paddingTop: 5,
    marginRight: 10,
    color: "white",
    fontSize: 35,
    lineHeight: 35,
    marginLeft: 15,
  },
  titleText: {
    transform: [{ rotate: "-90deg" }],
    color: "white",
    fontSize: 22,
    marginRight: 10,
    marginTop: 20,
    paddingRight: 20,
    fontWeight: "700",
  },
});

export default ChallengeComponent;

//                <AntDesign name="questioncircle" style={styles.icon} />
