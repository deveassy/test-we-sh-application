import * as React from "react";
import styled from "styled-components/native";
// import photo from "../../../assets/map.png";

export default function WishListScreen({ navigation }) {
  return (
    <Container>
      <ItemsContainer>
        <Items onPress={() => navigation.navigate("Details")}>
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
      </ItemsContainer>
      <ItemsContainer>
        <Items>
          <IconContainer>
            <IconView source={require("../../../assets/play.png")} />
          </IconContainer>
          <IconText>미디어</IconText>
        </Items>
        <Items>
          <IconContainer>
            <IconView source={require("../../../assets/act.png")} />
          </IconContainer>
          <IconText>기타</IconText>
        </Items>
      </ItemsContainer>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const ItemsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 30px 0 15px;
`;

const Items = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 130px;
  height: 130px;
  margin: 0 10px;
`;

const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  padding: 20px;
  margin-bottom: 10px;
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
  font-size: 20px;
  font-weight: 500;
`;
