import * as React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Calendar, LocaleConfig, Agenda } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "en";

export default function CalendarScreen({ navigation }) {
  return (
    <Container>
      <CalendarContainer>
        <Calendar
          current={"2020-08-24"}
          minDate={"2020-01-01"}
          maxDate={"2020-12-31"}
          onDayPress={() => {
            navigation.navigate("Schedule");
          }}
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          monthFormat={"yyyy MM"}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          hideArrows={false}
          renderArrow={(direction) =>
            direction === "left" ? (
              <AntDesign name="left" size={20} color="#50cebb" />
            ) : (
              <AntDesign name="right" size={20} color="#50cebb" />
            )
          }
          hideExtraDays={false}
          disableMonthChange={true}
          firstDay={7}
          hideDayNames={false}
          showWeekNumbers={false}
          onPressArrowLeft={(substractMonth) => substractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableArrowLeft={false}
          disableArrowRight={false}
          disableAllTouchEventsForDisabledDays={true}
          markedDates={{
            "2020-08-16": {
              selected: true,
              marked: true,
              selectedColor: "skyblue",
            },
            "2020-08-17": { marked: true },
            "2020-08-18": { marked: true, dotColor: "red", activeOpacity: 0 },
            // "2020-08-19": { disabled: true, disableTouchEvent: true },
          }}
          // markingType={"period"}
          // markedDates={{
          //   "2020-08-01": { marked: true, dotColor: "#50cebb" },
          //   "2020-08-02": { marked: true, dotColor: "#50cebb" },
          //   "2020-08-21": {
          //     startingDay: true,
          //     color: "#50cebb",
          //     textColor: "white",
          //   },
          //   "2020-08-22": { color: "#70d7c7", textColor: "white" },
          //   "2020-08-23": {
          //     color: "#70d7c7",
          //     textColor: "white",
          //     marked: true,
          //     dotColor: "white",
          //   },
          //   "2020-08-24": {
          //     endingDay: true,
          //     color: "#50cebb",
          //     textColor: "white",
          //   },
          // }}
        />
        <Agenda
          // The list of items that have to be displayed in agenda. If you want to render item as empty date
          // the value of date key has to be an empty array []. If there exists no value for date key it is
          // considered that the date in question is not yet loaded
          items={{
            "2020-08-22": [{ name: "item 1 - any js object" }],
            "2020-08-23": [{ name: "item 2 - any js object", height: 80 }],
            "2020-08-24": [],
            "2020-08-25": [
              { name: "item 3 - any js object" },
              { name: "any js object" },
            ],
          }}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={(month) => {
            console.log("trigger items loading");
          }}
          // Callback that fires when the calendar is opened or closed
          onCalendarToggled={(calendarOpened) => {
            console.log(calendarOpened);
          }}
          // Callback that gets called on day press
          onDayPress={(day) => {
            console.log("day pressed");
          }}
          // Callback that gets called when day changes while scrolling agenda list
          onDayChange={(day) => {
            console.log("day changed");
          }}
          // Initially selected day
          selected={"2020-08-16"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2020-08-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2020-08-30"}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {
            return <View />;
          }}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderDay={(day, item) => {
            return <View />;
          }}
          // Specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return <View />;
          }}
          // Specify how agenda knob should look like
          renderKnob={() => {
            return <View />;
          }}
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <View />;
          }}
          // Specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          // Hide knob button. Default = false
          hideKnob={true}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          markedDates={{
            "2020-08-16": { selected: true, marked: true },
            "2020-08-17": { marked: true },
            "2020-08-18": { disabled: true },
          }}
          // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
          disabledByDefault={true}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
          onRefresh={() => console.log("refreshing...")}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
          refreshControl={null}
          // Agenda theme
          // theme={{
          //   ...calendarTheme,
          //   agendaDayTextColor: "yellow",
          //   agendaDayNumColor: "green",
          //   agendaTodayColor: "red",
          //   agendaKnobColor: "blue",
          // }}
          // Agenda container style
          style={{}}
        />
      </CalendarContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const CalendarContainer = styled.View`
  flex: 1;
  width: 100%;
`;
