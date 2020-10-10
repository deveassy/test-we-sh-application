import * as React from "react";
import styled from "styled-components/native";
import { Text, Button, InputText } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function WishListScreen({ navigation }) {
  return (
    <Container>
      <ListContainer>
        <Ionicons
          name="ios-rocket"
          size={25}
          style={{ marginLeft: 10, marginRight: 5 }}
        />
        <ListItem
          title="하동 짚라인"
          onPress={() => navigation.navigate("Details")}
          color="#b52b65"
        ></ListItem>
        <AntDesign
          name="checkcircleo"
          size={25}
          style={{ position: "absolute", right: 10 }}
        />
      </ListContainer>
      <ListContainer>
        <Ionicons
          name="ios-cafe"
          size={25}
          style={{ marginLeft: 10, marginRight: 5 }}
        />
        <ListItem
          title="장기동 스우스 커피"
          // onPress={() => navigation.navigate("Details")}
          color="#6f4a8e"
        ></ListItem>
        <AntDesign
          name="checkcircleo"
          size={25}
          style={{ position: "absolute", right: 10 }}
        />
      </ListContainer>
      <ListContainer>
        <Ionicons
          name="logo-model-s"
          size={25}
          style={{ marginLeft: 10, marginRight: 5 }}
        />
        <ListItem
          title="삼척 씨스포빌 카라반캠핑"
          // onPress={() => navigation.navigate("Details")}
          color="#62760c"
        ></ListItem>
        <AntDesign
          name="checkcircleo"
          size={25}
          style={{ position: "absolute", right: 10 }}
        />
      </ListContainer>
      <ListContainer>
        <Ionicons
          name="md-appstore"
          size={25}
          style={{ marginLeft: 10, marginRight: 5 }}
        />
        <ListItem
          title="테넷"
          // onPress={() => navigation.navigate("Details")}
          color="#f08a5d"
        ></ListItem>
        <AntDesign
          name="checkcircleo"
          size={25}
          style={{ position: "absolute", right: 10 }}
        />
      </ListContainer>
      <ListContainer>
        <Ionicons
          name="ios-cafe"
          size={25}
          style={{ marginLeft: 10, marginRight: 5 }}
        />
        <ListItem
          title="크리스피도넛 글레이즈드"
          // onPress={() => navigation.navigate("Details")}
          color="#3b6978"
        >
          <InputText />
        </ListItem>
        <AntDesign
          name="checkcircleo"
          size={25}
          style={{ position: "absolute", right: 10 }}
        />
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
  position: relative;
  padding: 10px 0;
  border-bottom-width: 1px;
`;

const ListItem = styled.Button`
  font-size: 20px;
`;
