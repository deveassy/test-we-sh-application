import * as React from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";

export default function AlbumScreen({ navigation }) {
  return (
    <Container>
      <Text>Album Screen입니다.</Text>
      <Button
        title="Details Button"
        onPress={() => navigation.navigate("Details")}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
