import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 1,
            otherParam: "anything you want here",
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// const HomeScreen = () => {
//   return (
//     <Container>
//       <HomeText>Hello, This is Home Screen.</HomeText>
//       <HomeButton
//         // actionOpacity={0.8}
//         onPress={() => props.navigation.navigate("Detail")}
//       >
//         Go to detail screen
//       </HomeButton>
//     </Container>
//   );
// };

// const DetailScreen = () => {
//   return (
//     <Container>
//       <HomeText>
//         Welcome, This is Detail Screen. I'm trying to make others screen.
//       </HomeText>
//       <HomeButton
//         // actionOpacity={0.8}
//         onPress={() => props.navigation.navigate("Home")}
//       >
//         Home
//       </HomeButton>
//     </Container>
//   );
// };

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Detail: DetailScreen,
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

// const Container = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;
// const HomeText = styled.Text`
//   font-size: 15px;
// `;
// const HomeButton = styled.Button`
//   padding: 5px;
//   background-color: tomato;
// `;

// export default createAppContainer(AppNavigator);
