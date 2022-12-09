import { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutScreen";
import AddRestaurant from "./screens/AddRestaurant";
import MyRestaurant from "./screens/MyRestaurant";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: "Your Restaurant Guide",
              headerStyle: {
                backgroundColor: "#258513",
              },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="AboutScreen" component={AboutScreen} />
          <Stack.Screen name="MyRestaurant" component={MyRestaurant} />
          <Stack.Screen name="AddRestaurant" component={AddRestaurant} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
