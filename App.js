import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./Checkout";
import Landing from "./Landing";
import PickSeats from "./PickSeats";

export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FILMS_REQUEST" });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={true} />
      {/* <Landing {...state} /> */}
      <Checkout />
      {/* <PickSeats /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
