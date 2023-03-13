import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo, Search, User, Zomato } from "../assets";
import FaUserCircle from "react-icons/fa";
import NavOptions from "../components/NavOptions.js";
import { Icon } from "react-native-elements";
import Categories from "../components/Categories";
import FeatureCard from "../components/FeatureCard";
import Features from "../components/Features";
import Offer from "../components/Offer";
import { TouchableOpacity } from "react-native";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 bg-white mb-1">
        <View className="mx-4 flex-row align-middle justify-between space-x-2 items-center">
          <View className="flex-row mt-4 space-x-2 items-center">
            <View>
              <Image
                source={Zomato}
                className="w-[150px] h-[50px]  mb-4 pt-2"
              />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Image className="w-[60px] h-[60px]" source={User} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={{ borderWidth: 1 }}
          className="flex-row space-x-3 p-1 mx-4  bg-gray-200"
        >
          <Image className="w-[25px] h-[25px]" source={Search} />
          <Text className="text-opacity-5 pt-1 p-1">
            Restaurants and Dishes
          </Text>
          {/* <TextInput
            placeholder="Restaurants and Dishes"
            keyboardType="default"
          /> */}
        </TouchableOpacity>
        <ScrollView className="mt-4">
          <Categories />
          <View className="flex-row justify-between items-center mt-2  mx-4  ">
            <View>
              <Text className="text-xl text-black">Offers Near You !</Text>
              <Text className="text-gray-500">
                Offers Near You and you must
              </Text>
            </View>
            <Icon
              className=" rounded-full  mt-5"
              name="arrowright"
              color="gray"
              type="antdesign"
            />
          </View>
          <Offer />

          <View className="flex-row justify-between items-center mt-2 mx-4  ">
            <View>
              <Text className="text-xl text-black">Features !</Text>
              <Text className="text-gray-500">
                Offers Near You and you must
              </Text>
            </View>
            <Icon
              className=" rounded-full  mt-5"
              name="arrowright"
              color="gray"
              type="antdesign"
            />
          </View>
          <Features />
          <View>
            <Text className="text-xl text-black">Offers Near You !</Text>
            <Text className="text-gray-500">Offers Near You and you must</Text>
          </View>
          <Icon
            className=" rounded-full  mt-5"
            name="arrowright"
            color="gray"
            type="antdesign"
          />

          <Offer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
