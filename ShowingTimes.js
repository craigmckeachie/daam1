import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "./helpers/Date";
import { theme } from "./theme";

export default function ShowingTimes({ selected_date, showings }) {
  return (
    <View style={styles.container}>
      <Text style={{ ...theme.text.subtitle, textAlign: "center" }}>
        Showing times for {selected_date.toShowingDateString()}
      </Text>
      <View style={styles.showings}>
        {showings.map(showing => (
          <Text style={theme.text.normal} key={showing.id}>
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
