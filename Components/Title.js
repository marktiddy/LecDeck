import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const Title = ({ loadMenu }) => {
  const burgerPress = () => {
    loadMenu();
  };

  return (
    <Header
      centerComponent={{
        text: 'LecDeck',
        style: {
          color: '#fff',
          fontSize: 22,
          fontWeight: '500',
        },
      }}
      leftComponent={
        <TouchableOpacity>
          <Ionicons
            name="ios-menu"
            size={26}
            color="white"
            onPress={burgerPress}
          />
        </TouchableOpacity>
      }
      backgroundColor="#212121"
    />
  );
};

export default Title;
