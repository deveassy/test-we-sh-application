import React, { useState } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
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
          }}
          items={state.items}
          // loadItemsForMonth={loadItems}
          renderItem={renderItem}
          // renderEmptyDate={renderEmptyDate}
          rowHasChanged={rowHasChanged}
          renderDay={(day, item) => (
            <AgendaDayConatainer>
              <AgendaDay>{day ? day.day : null}</AgendaDay>
              <DayName>{day ? "일" : null}</DayName>
            </AgendaDayConatainer>
          )}
        />
        <DateView></DateView>
        <DateView></DateView>
        <DateView></DateView>
        {/* <Agenda
          items={state.items}
          loadItemsForMonth={loadItems}
          selected={"2020-09-05"}
          renderItem={renderItem}
          renderEmptyDate={renderEmptyDate}
          rowHasChanged={rowHasChanged}
          markingType={"period"}
          markedDates={{
            "2020-09-03": {
              marked: true,
              dotColor: "orange",
            },
            "2020-09-30": { startingDay: true, color: "#91d18b" },
            "2020-10-01": { color: "#91d18b" },
            "2020-10-02": { endingDay: true, color: "#91d18b" },
          }}
          monthFormat={"yyyy. MM"}
          theme={{
            calendarBackground: "#fff",
            agendaKnobColor: "#006a71",
          }}
          renderDay={(day, item) => (
            <AgendaDayConatainer>
              <AgendaDay>{day ? day.day : null}</AgendaDay>
              <DayName>{day ? "일" : null}</DayName>
            </AgendaDayConatainer>
          )}
        /> */}
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
            name: strTime + "일정",
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
    <ItemView>
      <ItemText>{item.name}</ItemText>
    </ItemView>
  );
}

function renderEmptyDate() {
  return (
    <ItemView>
      <ItemText>EMPTY!</ItemText>
    </ItemView>
  );
}

function rowHasChanged(r1, r2) {
  return r1.name !== r2.name;
}

function timeToString(time) {
  const date = new window.Date(time);
  return date.toISOString().split("T")[0];
}

// component style
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

const AgendaDayConatainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 75px;
`;

const AgendaDay = styled.Text`
  color: #84a9ac;
  font-size: 32px;
  text-align: center;
`;

const DayName = styled.Text`
  margin-top: 10px;
  color: #84a9ac;
  font-size: 15px;
`;

const ItemView = styled.View`
  align-items: center;
  justify-content: center;
  height: 70px;
  margin: 10px 0;
  background-color: #fff;
`;
const ItemText = styled.Text`
  font-size: 15px;
`;

const DateView = styled.View`
  width: 320px;
  height: 50px;
  margin: 12px 0 0 27px;
  border: transparent;
  border-radius: 20px;
  background-color: green;
`;
