import { View, Text,StyleSheet,TextInput, TouchableOpacity, Alert} from 'react-native'
import Home from './Home';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const OTP = () => {
    const [numberInput1, setNumberInput1] = useState("");
    const [numberInput2, setNumberInput2] = useState("");
    const [numberInput3, setNumberInput3] = useState("");
    const [numberInput4, setNumberInput4] = useState("");
    const navigation = useNavigation();
    const handleSubmit = () => {
        // Check if the input is empty
        if (!numberInput1||!numberInput2||!numberInput3||!numberInput4) {
          Alert.alert("Number is required");
          return;
        } else {
          navigation.navigate(Home);
        }
      };
  return (
    <View style={styles.container}>
       <View>
      <Text>We've sent a verification code to </Text>
      <Text>+91 9988776655 </Text>
      </View>
        <View style={styles.input1}>
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" onChangeText={setNumberInput1}
        value={numberInput1}/>
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" onChangeText={setNumberInput2}
        value={numberInput2}/>
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" onChangeText={setNumberInput3}
        value={numberInput3}/>
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" onChangeText={setNumberInput4}
        value={numberInput4} />
      </View>
      <View>
      <Text style={{fontWeight:'bold',opacity:.2,marginTop:20}}> Resend OTP in 26</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      marginTop:50
    },
    input1: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      width: 40,
      height: 40,
      margin: 10,
      textAlign: 'center',
      marginTop:30
    },
    btn: {
        width: "80%",
        height: 50,
        borderRadius: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#8e8e8e",
      },
      btnText: {
        color: "#000000",
        fontSize: 20,
      },
  });
export default OTP