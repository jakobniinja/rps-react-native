import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppContext from "../Context/AppContext";

export function Movment() {
  const { token, setToken, playerMove } = React.useContext(AppContext);

  const url = `http://192.168.1.202:8080/games/move/${playerMove}`;

  console.log("before useEffect", playerMove);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",

      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        console.log(res);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>{playerMove}</Text>
    </View>
  );
}
