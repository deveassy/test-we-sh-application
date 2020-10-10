import * as React from "react";
import styled from "styled-components/native";
// import FastImage from "react-native-fast-image";
import { FontAwesome } from "@expo/vector-icons";

export default function MainScreen() {
  const todayData = new Date();
  todayData.setHours(0);
  todayData.setMinutes(0);
  todayData.setSeconds(0, 0);

  const anniversaryData = new Date(2015, 8, 9);
  const differenceData =
    (todayData - anniversaryData) / (1000 * 60 * 60 * 24) + 31 + 1;
  return (
    <Container>
      <DdayContainer>
        <FontAwesome name="heartbeat" size={35} color="#ee6f57" />
        <MainText>{differenceData}</MainText>
      </DdayContainer>
      <PictureContainer>
        <OurPicture
          // style={{ width: 380, height: 380, opacity: 0.5 }}
          source={require("../assets/ours.png")}
        />
      </PictureContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #d1bcab;
`;

const DdayContainer = styled.View`
  z-index: 1;
  position: absolute;
  top: 10px;
  align-items: center;
  margin-top: 50px;
`;
const MainText = styled.Text`
  margin-top: -5px;
  font-size: 37px;
  font-weight: 800;
  color: #848ccf;
`;

const PictureContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 140px 0 0;
`;
const OurPicture = styled.Image`
  width: 380px;
  height: 480px;
  opacity: 0.5;
`;
