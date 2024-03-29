import React, { useContext } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MainContext } from "../Context/MainContext";

//The custom drawer component
import DrawerContent from "./DrawerContent";

//Import screens
import HomeScreen from "../Screens/HomeScreen";
import SessionScreen from "../Screens/SessionScreen";
import LoadingScreen from "../Screens/LoadingScreen";
//Create drawer navigator
const Drawer = createDrawerNavigator();

const MainComp = () => {
  const { isLoading } = useContext(MainContext);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Drawer.Navigator
        initialRouteName="Home"
        overlayColor="#840F2E"
        screenOptions={{
          drawerActiveBackgroundColor: "purple",
          drawerActiveTintColor: "#ffffff",
          drawerInactiveTintColor: "black",
          drawerInactiveBackgroundColor: "grey",
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Session"
          component={SessionScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default MainComp;
