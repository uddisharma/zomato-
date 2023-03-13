import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { Logo, User, Zomato } from "../assets";

const CategoryList = ({ route }) => {
  const name = route.params.param;
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => res.json())
      .then((json) => setData(json.meals))
      .catch((error) => console.error(error));
  }, []);
  //   console.log(data);
  return (
    <SafeAreaView className=" mx-2">
      {/* <View className=" pt-1 mx-4 flex-row justify-between space-x-2 items-center"> */}
      <View className="mx-4 flex-row align-middle justify-between space-x-2 items-center">
        <View className="flex-row mt-4 space-x-2 items-center">
          <View>
            <Image source={Zomato} className="w-[150px] h-[50px]  mb-4 pt-2" />
          </View>
        </View>
        <View>
          <Image className="w-[60px] h-[60px]" source={User} />
        </View>
      </View>
      {/* </View> */}
      <ScrollView>
        <View className="mb-20">
          {data &&
            data.map((e) => (
              <TouchableOpacity
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
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryList;
