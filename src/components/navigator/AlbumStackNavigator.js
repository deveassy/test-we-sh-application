import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AlbumScreen from "../screen/Album";

const Stack = createStackNavigator();

export default function AlbumStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#10375c",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23,
        },
      }}
    >
      <Stack.Screen name="Album" component={AlbumScreen} />
    </Stack.Navigator>
  );
}
