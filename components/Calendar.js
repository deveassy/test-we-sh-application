// import * as React from "react";
// import { Calendar } from "react-native-calendario";
// import styled from "styled-components";

// export default function CalendarScreen() {
//   return (
//     <Container>
//       <CalendarContainer>
//         <Calendar
//           onChange={(range) => console.log(range)}
//           minDate={new Date(2020, 1, 1)}
//           startDate={new Date(2020, 3, 30)}
//           endDate={new Date(2020, 4, 5)}
//           theme={{
//             activeDayColor: {},
//             monthTitleTextStyle: {
//               color: "#3282b8",
//               fontWeight: "400",
//               fontSize: 16,
//             },
//             emptyMonthContainerStyle: {},
//             emptyMonthTextStyle: {
//               fontWeight: "200",
//             },
//             weekColumnsContainerStyle: {},
//             weekColumnStyle: {
//               paddingVertical: 10,
//             },
//             weekColumnTextStyle: {
//               color: "#b6c1cd",
//               fontSize: 13,
//             },
//             nonTouchableDayContainerStyle: {},
//             nonTouchableDayTextStyle: {},
//             startDateContainerStyle: {},
//             endDateContainerStyle: {},
//             dayContainerStyle: {},
//             dayTextStyle: {
//               color: "#2d4150",
//               fontWeight: "200",
//               fontSize: 15,
//             },
//             dayOutOfRangeContainerStyle: {},
//             dayOutOfRangeTextStyle: {},
//             todayContainerStyle: {},
//             todayTextStyle: {
//               color: "#3282b8",
//               fontWeight: "300",
//             },
//             activeDayContainerStyle: {
//               backgroundColor: "#6d95da",
//             },
//             activeDayTextStyle: {
//               color: "white",
//             },
//             nonTouchableLastMonthDayTextStyle: {},
//           }}
//         />
//       </CalendarContainer>
//     </Container>
//   );
// }

import * as React from "react";
import styled from "styled-components";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";
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
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "en";

// function Arrow() {
//   return <AntDesign name="right" size={15} color="skyblue" />;
// }

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
          // markedDates={{
          //   "2020-08-16": {
          //     selected: true,
          //     marked: true,
          //     selectedColor: "skyblue",
          //   },
          //   "2020-08-17": { marked: true },
          //   "2020-08-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          //   // "2020-08-19": { disabled: true, disableTouchEvent: true },
          // }}
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
  padding-top: 100px;
`;
