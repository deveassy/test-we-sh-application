import React, { useState } from "react";
import styled from "styled-components";
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
  [state, setState] = useState({
    items: {},
  });
  return (
    <Container>
      <CalendarContainer>
        <Calendar
          current={"2020-08-24"}
          minDate={"2020-01-01"}
          maxDate={"2020-12-31"}
          onDayPress={(day) => {
            alert("selected day", day);
          }}
          onDayLongPress={() => {
            navigation.navigate("Schedule");
          }}
          monthFormat={"yyyy. MM"}
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
        />
        <Agenda
          items={state.items}
          loadItemsForMonth={loadItems}
          selected={"2017-05-16"}
          renderItem={renderItem}
          renderEmptyDate={renderEmptyDate}
          rowHasChanged={rowHasChanged}
          // markingType={'period'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
          // monthFormat={'yyyy'}
          // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
        <Date>일정들이 정리되서 나왔으면 좋겠는데..</Date>
      </CalendarContainer>
    </Container>
  );
}

function loadItems(day) {
  setTimeout(() => {
    for (let i = -15; i < 85; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);
      if (!state.items[strTime]) {
        state.items[strTime] = [];
        const numItems = Math.floor(Math.random() * 5);
        for (let j = 0; j < numItems; j++) {
          state.items[strTime].push({
            name: "Item for " + strTime,
            height: Math.max(50, Math.floor(Math.random() * 150)),
          });
        }
      }
    }
    //console.log(state.items);
    const newItems = {};
    Object.keys(state.items).forEach((key) => {
      newItems[key] = state.items[key];
    });
    setState({
      items: newItems,
    });
  }, 1000);
  // console.log(`Load Items for ${day.year}-${day.month}`);
}

function renderItem(item) {
  return (
    <View style={[styles.item, { height: item.height }]}>
      <Text>{item.name}</Text>
    </View>
  );
}

function renderEmptyDate() {
  return (
    <View style={styles.emptyDate}>
      <Text>This is empty date!</Text>
    </View>
  );
}

function rowHasChanged(r1, r2) {
  return r1.name !== r2.name;
}

function timeToString(time) {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
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

const Date = styled.Text`
  margin: 10px;
  font-size: 20px;
`;
