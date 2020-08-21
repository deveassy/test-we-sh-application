import * as React from "react";
import styled from "styled-components";

export default function MainScreen() {
  return (
    <Container>
      <MainText>1840 days</MainText>
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
`;

const MainText = styled.Text`
  font-size: 35px;
  font-weight: 800;
  color: #848ccf;
`;

const PictureContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 10px 20px;
`;
const OurPicture = styled.Image`
  width: 330px;
  height: 450px;
`;
