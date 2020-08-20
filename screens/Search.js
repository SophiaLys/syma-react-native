import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
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

export default Search;
