import React from "react";
import { View, ActivityIndicator } from "react-native";

const Activity = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};
export default Activity;
