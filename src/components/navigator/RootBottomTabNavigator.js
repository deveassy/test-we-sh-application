import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

// import MainStack from "../navigator/MainStackNavigator";
import MainScreen from "../screen/Main";

import AlbumStack from "../navigator/AlbumStackNavigator";
import CalendarStack from "../navigator/CalendarStackNavigator";
import WishListStack from "../navigator/WishListStackNavigator";

const Tab = createBottomTabNavigator();

export default function RootBottomStackNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Main") {
              iconName = focused ? "ios-heart" : "ios-heart-empty";
            } else if (route.name === "Album") {
              iconName = focused ? "md-images" : "md-images";
            } else if (route.name === "Calendar") {
              iconName = focused ? "md-calendar" : "ios-calendar";
            } else if (route.name === "WishList") {
              iconName = focused ? "ios-star" : "ios-star-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff5722",
          inactiveTintColor: "#d9c6a5",
        }}
      >
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Album" component={AlbumStack} />
        <Tab.Screen name="Calendar" component={CalendarStack} />
        <Tab.Screen name="WishList" component={WishListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
