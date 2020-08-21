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
      <Text>Details Screen입니다. 세부적인 버튼 구현해야해요.</Text>
      <Ionicons name="ios-sunny" size={30} color="#d54062" />
    </View>
  );
}

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "transparent",
      }}
    >
      <MainStack.Screen name="Main" component={MainScreen} />
    </MainStack.Navigator>
  );
}

// const Stack = createStackNavigator();

// function

const AlbumStack = createStackNavigator();

function AlbumStackScreen() {
  return (
    <AlbumStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#93b5e1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AlbumStack.Screen name="Album" component={AlbumScreen} />
      <AlbumStack.Screen name="Details" component={DetailsScreen} />
    </AlbumStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#93b5e1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </CalendarStack.Navigator>
  );
}

const WishListStack = createStackNavigator();

function WishListStackScreen() {
  return (
    <WishListStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#93b5e1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <WishListStack.Screen
        name="WishList"
        options={{ title: "Wish List" }}
        component={WishListScreen}
      />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </WishListStack.Navigator>
  );
}

const LetterStack = createStackNavigator();

function LetterStackScreen() {
  return (
    <LetterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#93b5e1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <LetterStack.Screen
        name="Letter"
        options={{ title: "Love Letter" }}
        component={LetterScreen}
      />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </LetterStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
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
            } else if (route.name === "Letter") {
              iconName = focused ? "ios-mail-open" : "ios-mail";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff5722",
          inactiveTintColor: "#d9c6a5",
        }}
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
