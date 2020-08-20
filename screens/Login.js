import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import axios from "axios";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ setToken, setId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://syma-projet.herokuapp.com/user/log-in",
        {
          username: username,
          password: password,
        }
      );
      //console.log(response.data);
      if (response.data.token) {
        setToken(response.data.token);
        setId(response.data.id);
      } else {
        alert("Error, please try again");
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401) {
        alert("Wrong username and/or password");
      }
    }
  };

  return (
    //contentContainerStyle
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.loginText}>Username</Text>
        <TextInput
          style={styles.loginInput}
          autoCapitalize="none"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <Text style={styles.loginTextPassword}>Password</Text>
        <TextInput
          style={styles.loginInput}
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity style={styles.loginBtnConnect} onPress={handleSubmit}>
          <Text style={styles.loginBtnText}>Se Connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.loginBtnText}>Je m'inscris</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#78244d",
    fontSize: 18,
  },
  loginTextPassword: {
    color: "#78244d",
    fontSize: 18,
    marginTop: 10,
  },
  loginInput: {
    borderColor: "#78244d",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },
  loginBtnConnect: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    width: 170,
    height: 55,
    backgroundColor: "#78244d",
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 170,
    height: 55,
    backgroundColor: "#78244d",
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    color: "white",
    fontSize: 20,
  },
});

export default Login;
