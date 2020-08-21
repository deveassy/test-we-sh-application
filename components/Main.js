import * as React from "react";
import styled from "styled-components";
import { Image } from "react-native";

export default function MainScreen() {
  let imageName = require("../../assets/picture.JPG");
  return (
    <Container>
      <MainText>WE'SH의 메인스크린입니다.</MainText>
      <PictureContainer>
        <Image source={imageName} style={{ width: 50, height: 50 }} />
      </PictureContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.Text`
  font-size: 15px;
`;

const PictureContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  border: 2px solid #f9d56e;
`;
// const OurPicture = styled.Image`
//   width: 20px;
//   height: 20px;
// `;
