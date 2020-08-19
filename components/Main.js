import * as React from "react";
import styled from "styled-components";
import { ImageBackground, Button } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <Container>
      <MainText>WE'SH의 메인스크린입니다.</MainText>
      <MainText>마땅한 커플사진을 아직 찾지 못했어요...ㅠㅠ</MainText>
      <Button
        title="Details Button"
        onPress={() => navigation.navigate("Details")}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #faf3dd;
`;

const MainText = styled.Text`
  font-size: 15px;
`;
