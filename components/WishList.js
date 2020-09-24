import * as React from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function WishListScreen({ navigation }) {
  return (
    <Container>
      <ListContainer>
        <AntDesign name="checkcircleo" size={25} />
        <ListItem
          title="하동 짚라인"
          onPress={() => navigation.navigate("Details")}
          color="#000"
        ></ListItem>
      </ListContainer>
      <ListContainer>
        <AntDesign name="checkcircleo" size={25} />
        <ListItem
          title="Wish List Screen입니다."
          onPress={() => navigation.navigate("Details")}
          color="#000"
        ></ListItem>
      </ListContainer>
      <ListContainer>
        <AntDesign name="checkcircleo" size={25} />
        <ListItem
          title="Wish List Screen입니다."
          onPress={() => navigation.navigate("Details")}
          color="#000"
        ></ListItem>
      </ListContainer>
    </Container>
  );
}

const Container = styled.View`
  background-color: #fbecec;
  height: 520px;
  width: 350px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
`;

const ListContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: 1px;
`;

const ListItem = styled.Button`
  /* margin: 7px 0 7px 10px; */
  font-size: 20px;
`;
