import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Import des composants :
import Home from "./screens/Home";
import Login from "./screens/Login";
import Message from "./screens/Message";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
import Signup from "./screens/Signup";
import Annonce from "./components/Annonce";
import Vendre from "./screens/Vendre";
// Fin Import des composants

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const setToken = async (token) => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }
    setUserToken(token);
  };

  const setId = async (id) => {
    if (id) {
      AsyncStorage.setItem("userId", id);
    } else {
      AsyncStorage.removeItem("userId");
    }
    setUserId(id);
  };

  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      setisLoading(false);
      setUserToken(userToken);
    };
    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? null : userToken === null ? (
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {() => <Login setId={setId} setToken={setToken} />}
          </Stack.Screen>
          <Stack.Screen name="Signup">
            {() => <Signup setId={setId} setToken={setToken} />}
          </Stack.Screen>
          {/* <Stack.Screen name="Home">{() => <Home />}</Stack.Screen> */}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Menu">
            {() => (
              <Tab.Navigator
                tabBarOptions={{
                  style: {
                    backgroundColor: "white",
                    height: "14%",
                  },
                }}
              >
                <Tab.Screen
                  name="Home"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: () => (
                      <Ionicons name={"ios-home"} size={32} color="#C63E81" />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Home">{() => <Home />}</Stack.Screen>
                      <Stack.Screen name="Annonce">
                        {() => <Annonce />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Vendre"
                  options={{
                    tabBarLabel: "Vendre",
                    tabBarIcon: () => (
                      <AntDesign name="pluscircleo" size={30} color="#C63E81" />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Vendre">
                        {() => <Vendre />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                  {/* NE PAS SUPPRIMER :  */}
                  {/* {() =>
                  userToken === null ? (
                    <Stack.Navigator>
                      <Stack.Screen name="Login">
                        {() => <Login setId={setId} setToken={setToken} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  ) : (
                    <Stack.Navigator>
                      <Stack.Screen name="Vendre">
                        {() => <Vendre />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )
                } */}
                </Tab.Screen>

                <Tab.Screen
                  name="Profile"
                  options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: () => (
                      <Ionicons name={"ios-person"} size={40} color="#C63E81" />
                    ),
                  }}
                >
                  {() => <Profile setId={setId} setToken={setToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="Message"
                  options={{
                    tabBarLabel: "Message",
                    tabBarIcon: () => (
                      <FontAwesome
                        name="envelope-o"
                        size={30}
                        color="#C63E81"
                      />
                    ),
                  }}
                >
                  {() => <Message />}
                </Tab.Screen>
                <Tab.Screen
                  name="Search"
                  options={{
                    tabBarLabel: "Search",
                    tabBarIcon: () => (
                      <FontAwesome name="search" size={30} color="#C63E81" />
                    ),
                  }}
                >
                  {() => <Search />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//  <Stack.Navigator>
// <Stack.Screen name="Fil d'actualité">{() => <Home />}</Stack.Screen>
// </Stack.Navigator>
