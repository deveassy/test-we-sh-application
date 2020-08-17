import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./components/MainScreen";
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

// function SecondScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Second Screen</Text>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WE'SH"
          component={MainScreen}
          options={{ title: "WE'SH" }}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name="Album" component={AlbumScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="WishList" component={WishListScreen} />
        <Stack.Screen name="Letter" component={LetterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
