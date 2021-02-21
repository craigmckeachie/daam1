import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./Landing";

export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FILMS_REQUEST" });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} />
      <Landing {...state} />
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
