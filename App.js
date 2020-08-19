import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "./components/Main";
import AlbumScreen from "./components/Album";
import CalendarScreen from "./components/Calendar";
import WishListScreen from "./components/WishList";
import LetterScreen from "./components/Letter";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen입니다. test중이에요.</Text>
    </View>
  );
}

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

const AlbumStack = createStackNavigator();

function AlbumStackScreen() {
  return (
    <AlbumStack.Navigator>
      <AlbumStack.Screen name="Album" component={AlbumScreen} />
      <AlbumStack.Screen name="Details" component={DetailsScreen} />
    </AlbumStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
    </CalendarStack.Navigator>
  );
}

const WishListStack = createStackNavigator();

function WishListStackScreen() {
  return (
    <WishListStack.Navigator>
      <WishListStack.Screen name="WishList" component={WishListScreen} />
    </WishListStack.Navigator>
  );
}

const LetterStack = createStackNavigator();

function LetterStackScreen() {
  return (
    <LetterStack.Navigator>
      <LetterStack.Screen name="Letter" component={LetterScreen} />
    </LetterStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: "#999" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Main") {
              iconName = focused ? "" : "";
            }
          },
        })}
      >
        <Tab.Screen name="Main" component={MainStackScreen} />
        <Tab.Screen name="Album" component={AlbumStackScreen} />
        <Tab.Screen name="Calendar" component={CalendarStackScreen} />
        <Tab.Screen name="WishList" component={WishListStackScreen} />
        <Tab.Screen name="Letter" component={LetterStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
