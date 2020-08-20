import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = () => {
  return (
    <View style={styles.container}>
      <Text>Message</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // #F35960
    backgroundColor: "white",
  },
});

export default Message;
