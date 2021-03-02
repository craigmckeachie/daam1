import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./Checkout";
import Landing from "./Landing";
import PickSeats from "./PickSeats";
import Ticket from "./Ticket";
import { theme } from "./theme";

const appTheme = {
  ...DefaultTheme,
  colors: {
    background: "#fff",
    card: theme.colors.altLight
  }
};

const Nav = createStackNavigator();

export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FILMS_REQUEST" });
  }, []);

  return (
    <NavigationContainer theme={appTheme}>
      <StatusBar barStyle="light-content" hidden={true} />
      <View style={styles.container}>
        <Nav.Navigator initialRouteName="Home">
          <Nav.Screen name="Home">{() => <Landing {...state} />}</Nav.Screen>
          <Nav.Screen name="PickSeats" options={{ title: "Pick Seats" }}>
            {() => <PickSeats />}
          </Nav.Screen>
          <Nav.Screen name="Checkout">
            {() => <Checkout {...state} />}
          </Nav.Screen>
          <Nav.Screen name="Ticket">{() => <Ticket />}</Nav.Screen>
        </Nav.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
