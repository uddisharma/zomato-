import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_314/v1636501380/assets/7c/0d98ca-0968-4985-9eae-693ec18fde03/original/UberX-Share-Icon.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image:
      "https://seeklogo.com/images/U/uber-eats-logo-CA3BA2098B-seeklogo.com.png",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <View className="mt-2 flex-row flex-wrap justify-evenly">
      {data.length > 0 ? (
        data.map((e) => (
          <TouchableOpacity
            className="rounded-md shadow-md"
            key={e.id}
            onPress={() => navigation.navigate(e.screen)}
          >
            <View className="m-2">
              <View className="h-[250px] w-[150px] bg-gray-300 p-5 rounded-sm">
                <Image
                  source={{ uri: e.image }}
                  className="w-full h-[120px] justify-center items-center"
                />
                <Text className="text-[#0B646B] text-base font-bold justify-center items-center mt-5">
                  {e.title.slice(0, 20)}
                </Text>
                <Icon
                  className="p-2 bg-black font-semibold rounded-full w-10 mt-4"
                  name="arrowright"
                  color="white"
                  type="antdesign"
                />
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default NavOptions;
