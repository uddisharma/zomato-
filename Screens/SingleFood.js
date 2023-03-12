import { View, Text, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Rs } from "../assets";
import { TouchableOpacity } from "react-native";
const SingleFood = ({ route }) => {
  const [data, setData] = useState({});
  const [price, setPrice] = useState(0);
  const id = route.params.id;
  //   console.log(id);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((json) => setData(json.meals))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(data);
  return (
    <SafeAreaView className="mx-2">
      {data.length > 0 ? (
        data.map((meals) => (
          <View key={meals.idMeal}>
            <Image
              className="h-[350px] w-full "
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
                  +
                </Text>
              </TouchableOpacity>
            </View>
            {price !== 0 && (
              <TouchableOpacity className="mt-5 text-xl text-center bg-green-400 p-3">
                <Text className=" text-xl text-center">Order Now</Text>
              </TouchableOpacity>
            )}
          </View>
        ))
      ) : (
        <Text>No data found</Text>
      )}
    </SafeAreaView>
  );
};

export default SingleFood;
