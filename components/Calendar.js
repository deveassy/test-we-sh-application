import * as React from "react";
import styled from "styled-components";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";

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
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "en";

export default function CalendarScreen() {
  return (
    <Container>
      <CalendarContainer>
        <Calendar
          current={"2020-08-24"}
          minDate={"2020-01-01"}
          maxDate={"2020-12-31"}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          monthFormat={"yyyy MM"}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          hideArrows={true}
          renderArrow={(direction) => <Arrow />}
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
        />
      </CalendarContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CalendarContainer = styled.View`
  flex: 1;
  padding-top: 80px;
`;
