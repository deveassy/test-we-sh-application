import * as React from "react";
import styled from "styled-components/native";

export default function WishListDetailsScreen() {
  return (
    <Container>
      <ListContainer>
        <PhotoZone>
          <Photo source={require("../../../assets/wishlist.jpeg")} />
        </PhotoZone>
        <DiaryZone>하동 짚라인 타러 가기! 꼭 가보쟈</DiaryZone>
      </ListContainer>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
`;

const PhotoZone = styled.View`
  width: 250px;
  height: 200px;
`;

const Photo = styled.Image`
  width: 180px;
  height: 100px;
`;

const DiaryZone = styled.Text`
  width: 230px;
  height: 150px;
  font-size: 16px;
`;
