import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button, withTheme } from "react-native-elements";

import { Icon } from "react-native-elements";

import { StartScreen } from "./src/screens/StartScreen";
import { MenuScreen } from "./src/screens/MenuScreen";
import { InGameScreen } from "./src/screens/InGameScreen";
import { WinnerScreen } from "./src/screens/WinnerScreen";
import { ListGamesScreen } from "./src/screens/ListGamesScreen";
import { JoinablePlayersScreen } from "./src/screens/JoinablePlayersScreen";

function Start({ navigation }) {
  const [nickName, setNickName] = useState("");

  return (
    <>
      <StartScreen></StartScreen>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, marginTop: 120 }}
        placeholder={"Enter your nickname"}
        onChangeText={(nickName) => setNickName(nickName)}
        defaultValue={nickName}
      />
      {nickName == "" && (
        <Button title={"Please enter valid nickname"} type={"outline"} />
      )}
      {nickName != "" && (
        <Button
          title={"Let's start " + nickName}
          type={"outline"}
          onPress={() => navigation.navigate("Menu")}
        />
      )}
    </>
  );
}

function History() {
  return (
    <>
      <ListGamesScreen />
    </>
  );
}

function Joina({ navigation }) {
  return (
    <View style={{ backgroundColor: "white" }}>
      <JoinablePlayersScreen />

      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => navigation.navigate("Online")}
          />
        </View>
        <Text style={{ fontSize: 23 }}>Pelle </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => navigation.navigate("Online")}
          />
        </View>
        <Text style={{ fontSize: 23 }}>Lina </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => navigation.navigate("Online")}
          />
        </View>
        <Text style={{ fontSize: 23 }}>Sture </Text>
      </View>
    </View>
  );
}

function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <MenuScreen />
      <View style={styles.box}>
        <Button
          title="Spela Online"
          style={{ width: 150, marginTop: 150 }}
          type={"outline"}
          onPress={() => navigation.navigate("Joina")}
        />

        <Button
          title=" Spela Dator"
          style={{ width: 150, marginTop: 20 }}
          type={"outline"}
          onPress={() => navigation.navigate("Offline")}
        />

        <View style={styles.buttomRow}>
          <Button
            title="Hem"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
            onPress={() => navigation.navigate("Start")}
          />

          <Button
            title="Historik"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
            onPress={() => navigation.navigate("History")}
          />
        </View>
      </View>
    </View>
  );
}

function Online() {
  return (
    <>
      <InGameScreen />
    </>
  );
}

function Offline() {
  return (
    <>
      <InGameScreen />
    </>
  );
}

function Winner() {
  return (
    <>
      <WinnerScreen />
    </>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Joina" component={Joina} />

        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Winner" component={Winner} />

        <Stack.Screen name="Online" component={Online} />
        <Stack.Screen name="Offline" component={Offline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  },
  row: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "center",
  },
});
