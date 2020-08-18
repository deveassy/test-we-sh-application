import * as React from "react";
import styled from "styled-components";
import { ImageBackground, Button } from "react-native";

export default function MainScreen({ navigation }) {
  //   const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  //   if (betweenTimeDay < 365) {
  //     return `${betweenTimeDay}일전`;
  //   }
  return (
    <Container>
      {/* <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("/album.png")}
        resizeMode="cover"
      > */}
      <MainText>WE'SH의 메인스크린입니다.</MainText>
      <MainText>마땅한 커플사진을 아직 찾지 못했어요...ㅠㅠ</MainText>
      <Button
        title="Details Button"
        onPress={() => navigation.navigate("Details")}
      />
      {/* <MainText>{betweenTimeDay}</MainText> */}
      {/* </ImageBackground> */}
      {/* <ButtonContainer>
        <MenuButton onPress={() => navigation.navigate("Main")}>
          <ButtonText>Main</ButtonText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Album")}>
          <ButtonText>ALBUM</ButtonText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Calendar")}>
          <ButtonText>CALENDAR</ButtonText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("WishList")}>
          <ButtonText>WISH LIST</ButtonText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Letter")}>
          <ButtonText>LOVE LETTE</ButtonText>
        </MenuButton>
      </ButtonContainer> */}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  /* background-color: #faf3dd; */
`;

const MainText = styled.Text`
  font-size: 15px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  border: 1px solid #000;
  padding: 5px;
`;
const MenuButton = styled.TouchableOpacity`
  margin: 5px;
  padding: 5px;
  border: 3px solid tomato;
`;
const ButtonText = styled.Text`
  font-size: 14px;
`;
