import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "./helpers/Date";

export default function ShowingTimes({ selected_date, showings }) {
  return (
    <View style={styles.container}>
      <Text>Showing times for {selected_date.toShowingDateString()}</Text>
      <View style={styles.showings}>
        {showings.map(showing => (
          <Text key={showing.id}>
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
