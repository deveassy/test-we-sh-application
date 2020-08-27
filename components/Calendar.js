// import * as React from "react";
// import styled from "styled-components";
// import { Calendar, LocaleConfig } from "react-native-calendars";
// import { AntDesign } from "@expo/vector-icons";

// LocaleConfig.locales["en"] = {
//   monthNames: [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ],
//   monthNamesShort: [
//     "jan",
//     "feb",
//     "mar",
//     "apr",
//     "may",
//     "jun",
//     "jul",
//     "aug",
//     "sep",
//     "oct",
//     "nov",
//     "dec",
//   ],
//   dayNames: [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ],
//   dayNamesShort: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"],
//   today: "Aujourd'hui",
// };

// LocaleConfig.defaultLocale = "en";

// export default function CalendarScreen({ navigation }) {
//   return (
//     <Container>
//       <CalendarContainer>
//         <Calendar
//           current={"2020-08-24"}
//           minDate={"2020-01-01"}
//           maxDate={"2020-12-31"}
//           onDayPress={() => {
//             navigation.navigate("Schedule");
//           }}
//           onDayLongPress={(day) => {
//             console.log("selected day", day);
//           }}
//           monthFormat={"yyyy MM"}
//           onMonthChange={(month) => {
//             console.log("month changed", month);
//           }}
//           hideArrows={false}
//           renderArrow={(direction) =>
//             direction === "left" ? (
//               <AntDesign name="left" size={20} color="#50cebb" />
//             ) : (
//               <AntDesign name="right" size={20} color="#50cebb" />
//             )
//           }
//           hideExtraDays={false}
//           disableMonthChange={true}
//           firstDay={7}
//           hideDayNames={false}
//           showWeekNumbers={false}
//           onPressArrowLeft={(substractMonth) => substractMonth()}
//           onPressArrowRight={(addMonth) => addMonth()}
//           disableArrowLeft={false}
//           disableArrowRight={false}
//           disableAllTouchEventsForDisabledDays={true}
//           markedDates={{
//             "2020-08-16": {
//               selected: true,
//               marked: true,
//               selectedColor: "skyblue",
//             },
//             "2020-08-17": { marked: true },
//             "2020-08-18": { marked: true, dotColor: "red", activeOpacity: 0 },
//             // "2020-08-19": { disabled: true, disableTouchEvent: true },
//           }}
//           // markingType={"period"}
//           // markedDates={{
//           //   "2020-08-01": { marked: true, dotColor: "#50cebb" },
//           //   "2020-08-02": { marked: true, dotColor: "#50cebb" },
//           //   "2020-08-21": {
//           //     startingDay: true,
//           //     color: "#50cebb",
//           //     textColor: "white",
//           //   },
//           //   "2020-08-22": { color: "#70d7c7", textColor: "white" },
//           //   "2020-08-23": {
//           //     color: "#70d7c7",
//           //     textColor: "white",
//           //     marked: true,
//           //     dotColor: "white",
//           //   },
//           //   "2020-08-24": {
//           //     endingDay: true,
//           //     color: "#50cebb",
//           //     textColor: "white",
//           //   },
//           // }}
//           style={{ height: 400 }}
//         />
//       </CalendarContainer>
//     </Container>
//   );
// }

// const Container = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;
// `;

// const CalendarContainer = styled.View`
//   flex: 1;
//   width: 100%;
//   padding-top: 100px;
// `;
import React, { useEffect } from "react";
import { View, Text, Button, Platform } from "react-native";
import * as Calendar from "expo-calendar";

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync();
        console.log("Here are all your calendars:");
        console.log({ calendars });
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>Calendar Module Example</Text>
      <Button title="Create a new calendar" onPress={createCalendar} />
    </View>
  );
}

async function getDefaultCalendarSource() {
  const calendars = await Calendar.getCalendarsAsync();
  const defaultCalendars = calendars.filter(
    (each) => each.source.name === "Default"
  );
  return defaultCalendars[0].source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === "ios"
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: "Expo Calendar" };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: "Expo Calendar",
    color: "blue",
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: "internalCalendarName",
    ownerAccount: "personal",
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}
