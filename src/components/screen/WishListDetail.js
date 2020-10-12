import * as React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WishListDetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>하동 짚라인</Text>
      <Text>나혼자산다에서 박나래랑 이시언이 탔던 짚라인!</Text>
      <Ionicons name="ios-sunny" size={30} color="#d54062" />
      <Image
        style={{ width: 340, height: 250 }}
        source={require("../../../assets/wishlist.jpeg")}
      />
    </View>
  );
}
