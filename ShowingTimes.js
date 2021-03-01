import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "./helpers/Date";
import { theme } from "./theme";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function ShowingTimes({ selected_date, showings }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  function pickShowingTime(showing) {
    dispatch({ type: "HIDE_FILM_DETAILS" });
    navigation.push("PickSeats");
  }
  return (
    <View style={styles.container}>
      <Text style={{ ...theme.text.subtitle, textAlign: "center" }}>
        Showing times for {selected_date.toShowingDateString()}
      </Text>
      <View style={styles.showings}>
        {showings.map(showing => (
          <Text
            style={theme.text.normal}
            key={showing.id}
            onPress={() => pickShowingTime(showing)}
          >
            {new Date(showing.showing_time).toShowingTimeString()}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  showings: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
