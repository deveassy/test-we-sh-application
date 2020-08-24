import * as React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

export default function MainScreen() {
  return (
    <Container>
      <DdayContainer>
        <FontAwesome name="heartbeat" size={35} color="#ee6f57" />
        <MainText>1840</MainText>
        {/* <FontAwesome name="" size="" color="" /> */}
      </DdayContainer>
      <PictureContainer>
        <OurPicture source={require("../assets/ours.png")} />
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
  margin-top: 10px;
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
  margin: 72px 0 0;
`;
const OurPicture = styled.Image`
  width: 380px;
  height: 480px;
  opacity: 0.5;
`;
