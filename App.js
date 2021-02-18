import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  // console.error("fail");
  useEffect(() => {
    const timer = setTimeout(
      () => setLoading(previousLoading => !previousLoading),
      2000
    );
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Data is: {loading ? "loading" : "loaded"}</Text>
      <StatusBar style="auto" />
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
