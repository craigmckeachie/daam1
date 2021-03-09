import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./Landing";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const state = useSelector(state => state);
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FILMS_REQUEST" });
  }, []);
  return (
    <View style={styles.container}>
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
