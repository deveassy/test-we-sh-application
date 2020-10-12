import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CalendarScreen from "../screen/Calendar";
import ScheduleScreen from "../screen/Schedule";

const Stack = createStackNavigator();

export default function CalendarStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
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
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
    </Stack.Navigator>
  );
}
