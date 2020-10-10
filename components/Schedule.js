import * as React from "react";
import styled from "styled-components/native";

export default function ScheduleScreen() {
  return (
    <Container>
      <Hello>스케쥴 저장하는 screen입니다.</Hello>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Hello = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: tomato;
`;
