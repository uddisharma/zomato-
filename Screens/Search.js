import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search, Rs } from "../assets";
const Searching = () => {
  const init = {
    email: "",
    password: "",
  };
  const [text, setText] = useState("");
  const [signup, setSignup] = useState(init);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const handlesearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      .then((res) => res.json())
      .then((json) => setData(json.meals))
      .catch((error) => console.error(error));
  };
  const storeData = async (value) => {
    console.log(value);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
      setSignup(init);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      return jsonValue != null
        ? console.log(JSON.parse(jsonValue))
        : console.log("null");
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(data);
  return (
    <SafeAreaView className="mt-5">
      <View
        style={{ borderWidth: 1 }}
        className="flex-row space-x-3 p-1 mx-4  bg-gray-200"
      >
        <Image className="w-[25px] h-[25px]" source={Search} />

        <TextInput
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
      </View>

      <TouchableOpacity onPress={handlesearch}>
        <Text className="mx-4 text-center mt-3 p-2 bg-gray-400">Search</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={signup.email}
      />
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={signup.password}
      />
      <TouchableOpacity onPress={() => storeData(signup)}>
        <Text className="mx-4 text-center mt-3 p-2 bg-gray-400">Store</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getData}>
        <Text className="mx-4 text-center mt-3 p-2 bg-gray-400">Get</Text>
      </TouchableOpacity>
      <ScrollView className="mt-5">
        {data.length > 0
          ? data.map((e) => (
              <TouchableOpacity
                key={e.idMeal}
                onPress={() =>
                  navigation.navigate("SingleFood", { id: e.idMeal })
                }
              >
                <View key={e.idMeal} className="p-2 relative">
                  <Image
                    className="h-40 w-full "
                    source={{ uri: e.strMealThumb }}
                  />
                  <Text className="absolute left-4 bottom-4 text-xl text-black bg-gray-100 p-2">
                    {e.strMeal.slice(0, 10)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          : data.map((meals) => (
              <ScrollView key={meals.idMeal}>
                <Image
                  className="h-[250px] w-full "
                  source={{ uri: meals.strMealThumb }}
                />
                <View className="flex-row justify-between pt-4 bg-gray-300 p-2  ">
                  <View className="flex-row  items-center justify-around space-x-2">
                    <View className="h-5 w-5">
                      <Image className="h-5 w-5" source={Rs} />
                    </View>
                    <Text className="text-[16px] ml-10">
                      <Text className="text-blue-600 text-[25px] font-semibold">
                        {meals.idMeal.slice(0, 3)}
                      </Text>{" "}
                      /Piece
                    </Text>
                  </View>
                  <View>
                    <Text className="text-[20px] font-extralight ">
                      {meals.strMeal.slice(0, 15)}
                    </Text>
                    <Text className="text-[12px] text-right  text-gray-500">
                      {meals.strCategory}
                    </Text>
                  </View>
                </View>
                <Text className="mt-5 text-xl text-center bg-gray-300 p-3">
                  Want to Eat it at Your Home
                </Text>
                <View className="flex-row justify-evenly mt-5">
                  <TouchableOpacity
                    onPress={() =>
                      setPrice((prev) => prev - +meals.idMeal.slice(0, 3))
                    }
                    disabled={price == 0}
                  >
                    <Text className="bg-red-200 w-[80px] pt-1 justify-center h-[50px] text-center items-center text-white font-bold text-[28px]">
                      {" "}
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text className="bg-gray-300 w-[80px] pt-1 justify-center h-[50px] text-center items-center text-white font-bold text-[28px]">
                    {price}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      setPrice((prev) => prev + +meals.idMeal.slice(0, 3))
                    }
                  >
                    <Text className="bg-green-200 w-[80px] pt-1 justify-center h-[50px] text-center items-center text-white font-bold text-[28px]">
                      {" "}
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
                {price !== 0 && (
                  <TouchableOpacity className="mt-5 text-xl text-center bg-green-400 p-3">
                    <Text className=" text-xl text-center">Order Now</Text>
                  </TouchableOpacity>
                )}
              </ScrollView>
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Searching;
