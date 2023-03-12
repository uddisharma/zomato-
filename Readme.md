data.map((meals) => (
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
disabled={price == 0} >
<Text className="bg-red-200 w-[80px] pt-1 justify-center h-[50px] text-center items-center text-white font-bold text-[28px]"> -
</Text>
</TouchableOpacity>
<Text className="bg-gray-300 w-[80px] pt-1 justify-center h-[50px] text-center items-center text-white font-bold text-[28px]">
{price}
</Text>
<TouchableOpacity
onPress={() =>
setPrice((prev) => prev + +meals.idMeal.slice(0, 3))
} >
<Text className="bg-green-200 w-[80px] pt-1 justify-center h-[50px] text-center items-center text-white font-bold text-[28px]"> +
</Text>
</TouchableOpacity>
</View>
{price !== 0 && (
<TouchableOpacity className="mt-5 text-xl text-center bg-green-400 p-3">
<Text className=" text-xl text-center">Order Now</Text>
</TouchableOpacity>
)}
</ScrollView>
))

//22222
data.map((e) => (
<TouchableOpacity
onPress={() =>
navigation.navigate("SingleFood", { id: e.idMeal })
} >
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
