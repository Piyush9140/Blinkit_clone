import { StyleSheet, Text, View, TextInput ,Image,ScrollView} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", right: 10, marginTop: 10 }}>
        <FontAwesome5 name="user-circle" size={40} color="black" />
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>Delivery in</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>9 minutes</Text>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text>Jaypee university of engg and technology</Text>
        <AntDesign name="caretdown" size={12} color="black" />
      </View>
      <View style={styles.search}>
        <Feather name="search" size={24} color="#333" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#888"
        />
        <FontAwesome name="microphone" size={24} color="black" />
      </View>
      <ScrollView>
      <View style={{height:68,width:"100%"}}>
        <Image  source={require('../../assets/Images/2b.jpg')} style={{height:"100%",width:"100%"}}></Image>
      </View>
      <View>
      <Text style={{ fontWeight: "bold", fontSize:15}}>Bestsellers</Text>
      <Text style={{ fontWeight: "bold", fontSize:15 ,position:'absolute',right:15,color:'#027f02'}}>see all</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../../assets/Images/5b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/6b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/7b.jpg')} style={styles.image} />
      </View>
      <View style={styles.row}>
      <Image source={require('../../assets/Images/8b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/9b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/10b.jpg')} style={styles.image} />
      </View>
      <View style={{width:"100%",height:180,marginBottom:10}}>
        <Image source={require('../../assets/Images/3b.jpg')} style={{height:"100%",width:"100%",borderRadius:20}} />
      </View>
      <View style={{width:"100%",height:180,marginBottom:10}}>
      <Image source={require('../../assets/Images/1b.jpg')} style={{height:"100%",width:"100%",borderRadius:20}} />
      </View>
      <View>
      <Text style={{ fontWeight: "bold", fontSize:15}}>Grocery & Kitchen</Text>
      <Text style={{ fontWeight: "bold", fontSize:15 ,position:'absolute',right:15,color:'#027f02'}}>see all</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../../assets/Images/1.1b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/1.2b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/1.3b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/1.4b.jpg')} style={styles.image} />
      </View>
      <View style={styles.row}>
      <Image source={require('../../assets/Images/12b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/9b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/10b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/7b.jpg')} style={styles.image} />
      </View>
      <View>
      <Text style={{ fontWeight: "bold", fontSize:15}}>Beauty and Personal Care</Text>
      <Text style={{ fontWeight: "bold", fontSize:15 ,position:'absolute',right:15,color:'#027f02'}}>see all</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../../assets/Images/1.5b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/1.6b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/1.9b.jpg')} style={styles.image} />
        <Image source={require('../../assets/Images/1.8b.jpg')} style={styles.image} />
      </View>
      <View style={{width:"100%",height:180,marginBottom:10}}>
      <Image source={require('../../assets/Images/4b.jpg')} style={{height:"100%",width:"100%",borderRadius:20}} />
      </View>
    </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 10,
    backgroundColor:'white'
  },
  search: {
    marginTop: 10,
    marginBottom:20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f4f2f2",
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 1,
  },
  icon: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  image: {
    width: 100,
    height: 150,
  },
  scrollView: {
    width: '100%',
  },
});
