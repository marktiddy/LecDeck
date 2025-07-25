import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Header, Icon } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

const Title = ({ loadMenu }) => {
  const burgerPress = () => {
    loadMenu();
  };

  return (
    <>
      <View style={{ paddingTop: 25, backgroundColor: "#212121" }}></View>
      <Header
        centerComponent={{
          text: "LecDeck",
          style: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "500",
          },
        }}
        leftComponent={
          <TouchableOpacity>
            <Ionicons
              name="menu"
              size={26}
              color="white"
              onPress={burgerPress}
            />
          </TouchableOpacity>
        }
        backgroundColor="#212121"
      />
    </>
  );
};

export default Title;
