import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WishListScreen from "../screen/WishList";
import WishListDetailsScreen from "../screen/WishListDetail";

const Stack = createStackNavigator();

export default function WishListStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#c9485b",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23,
        },
      }}
    >
      <Stack.Screen
        name="WishList"
        options={{ title: "Wish List" }}
        component={WishListScreen}
      />
      <Stack.Screen name="Details" component={WishListDetailsScreen} />
    </Stack.Navigator>
  );
}
