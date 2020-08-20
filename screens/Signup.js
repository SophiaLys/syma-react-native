import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signup = ({ setToken, setId }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async () => {
    try {
      if (password !== passwordConfirm) {
        alert("Mots de passe différents, merci de rectifier");
      } else {
        const response = await axios.post(
          "https://syma-projet.herokuapp.com/user/sign-up",
          {
            email: email,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            postalCode: postalCode,
            city: city,
            address: address,
          }
        );
        console.log(response.data);
        if (response.data.token) {
          setToken(response.data.token);
          setId(response.data.id);
          alert("Votre compte a bien été créé");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScrollView style={styles.signup}>
      <SafeAreaView>
        <View>
          <TextInput
            autoCapitalize="none"
            value={email}
            placeholderTextColor="#78244d"
            placeholder="Email"
            style={styles.input}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            value={username}
            placeholderTextColor="#78244d"
            placeholder="Username"
            style={styles.input}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            placeholderTextColor="#78244d"
            placeholder="First-name"
            value={firstName}
            style={styles.input}
            onChangeText={(text) => {
              setFirstName(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Last-name"
            value={lastName}
            placeholderTextColor="#78244d"
            style={styles.input}
            onChangeText={(text) => {
              setLastName(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Code Postal"
            value={postalCode}
            placeholderTextColor="#78244d"
            style={styles.input}
            onChangeText={(text) => {
              setPostalCode(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Ville"
            placeholderTextColor="#78244d"
            value={city}
            style={styles.input}
            onChangeText={(text) => {
              setCity(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Address"
            placeholderTextColor="#78244d"
            value={address}
            style={styles.input}
            onChangeText={(text) => {
              setAddress(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            placeholderTextColor="#78244d"
            placeholder="Password"
            style={styles.input}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#78244d"
            placeholder="Confirm your password"
            value={passwordConfirm}
            style={styles.input}
            onChangeText={(text) => {
              setPasswordConfirm(text);
            }}
          />
          <TouchableOpacity style={styles.signupBtn} onPress={handleSubmit}>
            <Text style={styles.signupBtnText}>S'inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupBtn2}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.signupBtnText2}>
              Déjà un compte ? Se connecter
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  signup: {
    flex: 1,
  },
  input: {
    borderColor: "#78244d",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 5,
  },
  signupBtn: {
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
  signupBtnText: {
    color: "white",
    fontSize: 20,
  },
  signupBtnText2: {
    color: "white",
    fontSize: 14,
  },
  signupBtn2: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    width: 300,
    height: 30,
    backgroundColor: "#78244d",
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Signup;
