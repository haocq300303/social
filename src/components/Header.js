import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center p-4">
      <Image
        className="rounded-full w-[50] h-[50]"
        source={{
          uri: "https://res.cloudinary.com/dsvfqgd20/image/upload/v1666717344/Social%20app/oiyvhloihjmprnqkhp6p.jpg",
        }}
      />
      <Image
        className=" w-[50] h-[50]"
        source={{
          uri: "https://res.cloudinary.com/dsvfqgd20/image/upload/v1695819419/Social%20app/logo_o7lptj.png",
        }}
      />
      <Ionicons name="ios-notifications-outline" size={36} color="black" />
    </View>
  );
};

export default Header;
