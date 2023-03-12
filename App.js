import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { Provider } from "react-redux";
import { Store } from "./Store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapScreen from "./Screens/MapScreen";
import CategoryList from "./Screens/CategoryList";
import SingleFood from "./Screens/SingleFood";
// import { Search } from "./assets";
import Searching from "./Screens/Search";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        {/* <HomeScreen /> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="CategoryList" component={CategoryList} />
            <Stack.Screen name="SingleFood" component={SingleFood} />
            <Stack.Screen name="Search" component={Searching} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
