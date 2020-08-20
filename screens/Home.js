import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import Activity from "../components/Activity";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  // MARCHE PAS
  const fetchData = async () => {
    try {
      const response = await axios.get("https://syma-projet.herokuapp.com/ad");
      //console.log(response.data); // NON
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Activity />
  ) : (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          {/* <FlatList
              data={data.ad}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                <Text>{item.ad.title}</Text>;
              }}
            /> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
  },
  // annonceContainer: {
  //   width: "50%",
  //   height: 250,
  //   borderColor: "red",
  //   borderWidth: 1,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  // },
  // imageAnnonce: {
  //   width: 150,
  //   height: 150,
  // },
  // informations: {
  //   flexDirection: "row",
  // },
  // informationsText: {
  //   flexDirection: "row",
  // },
});

export default Home;
