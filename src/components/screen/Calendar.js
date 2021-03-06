import React, { useState } from "react";
import styled from "styled-components/native";
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
  const [state, setState] = useState(null);
  const getCurrent = () => {
    const today = new Date();

    const year = String(today.getFullYear());
    let month = String(today.getMonth() + 1);
    let day = String(today.getDay());

    month = month.length === 1 ? `0${month}` : month;
    day = day.length === 1 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };
  return (
    <Container>
      <CalendarContainer>
        <Calendar
          current={getCurrent()}
          onDayPress={(day) => {}}
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
          renderItem={renderItem}
          rowHasChanged={rowHasChanged}
        />
        {state ? (
          <React.Fragment>
            <DateView></DateView>
            <DateView></DateView>
            <DateView></DateView>
          </React.Fragment>
        ) : null}
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
