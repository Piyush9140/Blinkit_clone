import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import OTP from "./OTP";
import Home from "./Home";
const Login = () => {
  const [numberInput, setNumberInput] = useState("");
  const navigation = useNavigation();
  const handleSubmit = () => {
    // Check if the input is empty
    if (!numberInput) {
      Alert.alert("Number is required");
      return;
    } else {
      navigation.navigate(OTP);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity  onPress={() => {
          navigation.navigate(Home);
        }}style={{position:'absolute',zIndex:1,right:10,backgroundColor:'white',borderRadius:20}}>
          <Text style={{fontSize:15,padding:5}}>Skip Login</Text>
        </TouchableOpacity>
        <Image
          source={require("../../assets/Images/LoginNo.jpg")}
          style={{ height: 450, width: 345 }}
        ></Image>
      </View>
      <Text style={styles.title}>India's last minute app</Text>
      <Text style={{ alignSelf: "center" }}>Log in or sign up</Text>
      <TextInput
        onChangeText={setNumberInput}
        value={numberInput}
        keyboardType="numeric"
        placeholder="+91 Phone Number"
        style={[styles.input, { marginTop: 10 }]}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.btnText}>continue</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#efefef",
          width: "100%",
          marginTop:60
        }}
      >
        <Text
          style={{
            fontSize: 10,
            marginHorizontal: 15,
            opacity:.5
          }}
        >
          By continuing, you agree to our Terms of services & Privacy policy
        </Text>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: "black",
    alignSelf: "center",
    fontWeight: "600",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: "center",
    paddingLeft: 20,
  },
  btn: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#138911",
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
});
