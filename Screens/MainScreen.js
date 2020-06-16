import React, { useState } from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//import screens
import HomeScreen from './HomeScreen';
import DateScreen from './DateScreen';
import LoadingScreen from './LoadingScreen';
import Title from '../Components/Title';


const Drawer = createDrawerNavigator();

const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

return ()
};

export default MainScreen;
