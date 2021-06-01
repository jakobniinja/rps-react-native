import React, { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { StyleSheet, Text, View, Image } from "react-native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";

export function PcWinnerScreen() {
  const navigation = useContext(NavigationContext);

  const { nickName, setNickName, playerMove, opponentName, opponentMove } =
    useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={{ fontSize: 33, marginTop: 150 }}>hämta vinnare</Text>
        <Text>
          {opponentName} valde: {opponentMove}{" "}
        </Text>
        <Text style={{ fontSize: 33, marginTop: 30 }}></Text>
        {playerMove === "PAPER" && (
          <Image
            style={styles.pic}
            source={require("../../assets/" + "PAPER" + ".gif")}
          />
        )}
        {playerMove === "ROCK" && (
          <Image
            style={styles.pic}
            source={require("../../assets/" + "ROCK" + ".gif")}
          />
        )}
        {playerMove === "SCISSORS" && (
          <Image
            style={styles.pic}
            source={require("../../assets/" + "SCISSORS" + ".gif")}
          />
        )}
      </View>

      <View style={styles.buttomRow}>
        <Button
          title="Spela Igen"
          size={25}
          style={{ height: 70, width: 70, marginTop: 20, marginRight: 20 }}
          type={"outline"}
          onPress={() => navigation.navigate("Offline")}
        />
        <Button
          title="Avlsuta Spel"
          size={15}
          style={{ height: 70, width: 70, marginTop: 20, marginRight: 20 }}
          type={"outline"}
          onPress={() => {
            setNickName(""), navigation.navigate("Start");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixBackground: {
    backgroundColor: "#fff",
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
  },
  box: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttomRow: {
    flexDirection: "row",
    marginTop: 120,
    justifyContent: "center",
    marginBottom: 250,
    marginLeft: 20,
  },
  pic: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
});
