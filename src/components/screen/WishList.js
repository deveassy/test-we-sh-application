import * as React from "react";
import styled from "styled-components/native";
// import photo from "../../../assets/map.png";

export default function WishListScreen({ navigation }) {
  return (
    <Container>
      <Items>
        <IconContainer>
          <IconView source={require("../../../assets/map.png")} />
        </IconContainer>
        <IconText>가고싶은 장소</IconText>
      </Items>
      <Items>
        <IconContainer>
          <IconView source={require("../../../assets/food.png")} />
        </IconContainer>
        <IconText>맛집/카페</IconText>
      </Items>
      <Items>
        <IconContainer>
          <IconView source={require("../../../assets/play.png")} />
        </IconContainer>
        <IconText>미디어</IconText>
      </Items>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px;
  /* width: 350px;
  height: 520px;
  margin: auto; */
  padding: 20px;
  background-color: #fbecec;
  border-radius: 20px;
`;

const Items = styled.View`
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 150px;
  margin: 0 10px;
  background-color: orange;
`;

const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 50%;
`;

const IconView = styled.Image`
  width: 50px;
  height: 50px;
  padding: 20px;
`;

const IconText = styled.Text`
  color: red;
`;
