import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Cate, Logo } from "../assets";
import { useNavigation } from "@react-navigation/native";
const CategoryCard = ({ imgUrl, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      // key={key}
      onPress={() => navigation.navigate("CategoryList", { param: title })}
      className="relative mr-2"
    >
      <Image className="h-20 w-20 " source={{ uri: imgUrl }} />
      <Text className="absolute bottom-1 left-1 bg-gray-100 px-1 text-black font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
