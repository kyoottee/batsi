import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Image,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismisskeyboard");
      }}
    >
      <View style={globalStyles.container}>
        {/* map stuff */}
        <View style={styles.maphere}>
          <Text>Secret</Text>
          {/* <Image source={require("../assets/images/sample.jpg")} /> */}
        </View>
        {/* functionalities sa ubos */}
        <View style={styles.downUI}>
          {/* STARTING */}
          <View style={styles.icontext}>
            <MaterialIcons
              name="radio-button-checked"
              size={24}
              color="darkblue"
              marginTop={8}
            />
            <TextInput style={styles.input1} placeholder="Starting Point" />
          </View>
          {/* END */}
          <View style={styles.icontext}>
            <MaterialCommunityIcons
              name="map-marker-circle"
              size={24}
              color="darkblue"
              marginTop={8}
            />
            <TextInput style={styles.input1} placeholder="Destination" />
          </View>
          {/* PILIANAN GCASH OR CASH */}
          <View style={styles.modePaycontainer}>
            <View style={styles.boxTwo}>
              <Ionicons name="cash-outline" size={18} color="black" />
              <Text style={styles.modePay}>Cash</Text>
            </View>
            <View style={styles.boxTwo}>
              <Ionicons name="cash-outline" size={18} color="black" />
              <Text style={styles.modePay}>GCash</Text>
            </View>
          </View>
          {/* PLITEHAN */}
          <View>
            <Text style={styles.customButton}>imo plite kay 100k</Text>
          </View>
        </View>
        {/* insert nav buttons */}
        <View style={styles.navBar}>
          <View style={styles.boxOne}>
            <Octicons name="home" size={24} color="black" />
            <Text>Home</Text>
          </View>
          <View style={styles.boxOne}>
            <MaterialIcons name="schedule" size={24} color="black" />
            <Text>Itenerary</Text>
          </View>
          <View style={styles.boxOne}>
            <MaterialIcons name="history" size={24} color="black" />
            <Text>History</Text>
          </View>
          <View style={styles.boxOne}>
            <AntDesign name="profile" size={24} color="black" />
            <Text>About</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export const styles = StyleSheet.create({
  maphere: {
    backgroundColor: "skyblue",
    padding: 10,
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  downUI: {
    borderTopWidth: 0.5,
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    flex: 0.25,
    borderTopWidth: 0.5,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
  },

  icontext: {
    flexDirection: "row",
    // borderWidth: 1,
    // borderRadius: 15,
    padding: 2,
  },
  input1: {
    borderColor: "black",
    // backgroundColor: "#f5f5f5",
    width: 300,
    fontSize: 18,
    padding: 5,
    marginLeft: 10,
  },
  customButton: {
    borderWidth: 1,
    borderRadius: 200,
    padding: 10,
    width: 200,
    margin: 10,
    textAlign: "center",
  },
  modePaycontainer: {
    // borderWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modePay: {
    marginLeft: 10,
    fontSize: 16,
  },
  boxOne: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  boxTwo: {
    // borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    padding: 10,
  },
});
