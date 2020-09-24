import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "./components/Main";
import AlbumScreen from "./components/Album";
import CalendarScreen from "./components/Calendar";
import WishListScreen from "./components/WishList";
import ScheduleScreen from "./components/Schedule";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>하동 짚라인</Text>
      <Text>나혼자산다에서 박나래랑 이시언이 탔던 짚라인!</Text>
      <Ionicons name="ios-sunny" size={30} color="#d54062" />
      <Image
        style={{ width: 340, height: 250 }}
        source={require("./assets/wishlist.jpeg")}
      />
    </View>
  );
}

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="WESH" component={MainScreen} />
    </MainStack.Navigator>
  );
}

const AlbumStack = createStackNavigator();

function AlbumStackScreen() {
  return (
    <AlbumStack.Navigator
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
      <AlbumStack.Screen name="Album" component={AlbumScreen} />
    </AlbumStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#006a71",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23,
        },
      }}
    >
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
      <CalendarStack.Screen name="Schedule" component={ScheduleScreen} />
    </CalendarStack.Navigator>
  );
}

const WishListStack = createStackNavigator();

function WishListStackScreen() {
  return (
    <WishListStack.Navigator
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
      <WishListStack.Screen
        name="WishList"
        options={{ title: "Wish List" }}
        component={WishListScreen}
      />
      <WishListStack.Screen name="Details" component={DetailsScreen} />
    </WishListStack.Navigator>
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
            if (route.name === "WESH") {
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
        <Tab.Screen name="WESH" component={MainStackScreen} />
        <Tab.Screen name="Album" component={AlbumStackScreen} />
        <Tab.Screen name="Calendar" component={CalendarStackScreen} />
        <Tab.Screen name="WishList" component={WishListStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
