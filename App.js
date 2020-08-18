import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./components/Main";
import AlbumScreen from "./components/Album";
import CalendarScreen from "./components/Calendar";
import WishListScreen from "./components/WishList";
import LetterScreen from "./components/Letter";

// function HomeScreen({ navigation }) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details Screen"
//         onPress={() =>
//           navigation.navigate("First", {
//             itemId: 1,
//             otherParam: "anything you want here",
//           })
//         }
//       />
//       <Button
//         title="Go to Second Screen"
//         onPress={() => navigation.navigate("Second")}
//       />
//     </View>
//   );
// }

// function AlbumScreen({ navigation }) {
//   // const { itemId } = route.params;
//   // const { otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Album Screen</Text>
//       {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push("Details", {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("WE'SH")} />
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="WE'SH"
//           component={MainScreen}
//           // options={{ title: "WE'SH" }}
//           // initialParams={{ itemId: 42 }}
//         />
//         <Stack.Screen name="Album" component={AlbumScreen} />
//         <Stack.Screen name="Calendar" component={CalendarScreen} />
//         <Stack.Screen name="WishList" component={WishListScreen} />
//         <Stack.Screen name="Letter" component={LetterScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainStackScreen} />
        <Tab.Screen name="Album" component={AlbumStackScreen} />
        <Tab.Screen name="Calendar" component={CalendarStackScreen} />
        <Tab.Screen name="WishList" component={WishListStackScreen} />
        <Tab.Screen name="Letter" component={LetterStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
