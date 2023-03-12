import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { KFC, Logo, Restaurant, Star } from "../assets";
import { useNavigation } from "@react-navigation/native";

const OfferCard = ({ imgUrl, title, keys }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={keys}
      onPress={() => navigation.navigate("SingleFood", { id: keys })}
      className=" mr-2 bg-gray-100  p-1  h-38"
    >
      <Image className="h-36 w-64 " source={{ uri: imgUrl }} />
      <View className="ml-2 mt-2">
        <Text className="text-[17px] text-black  ">{title}</Text>
        <View className="flex-row space-x-3">
          <Image source={Star} className="w-5 h-5" />
          <Text className=" text-gray  items-center ">4.6</Text>
          <Text className=" text-gray  items-center ">{title}</Text>
        </View>
        <View className="flex-row space-x-2">
          <Image source={Restaurant} className="w-5 h-5" />
          <Text className="text-gray  items-center ">{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;
