import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Seat from "./Seat";
import { theme } from "./theme";

export default function Table({ table }) {
  return (
    <View style={styles.table}>
      <Text style={theme.text.normal}>Table {table.table_number}</Text>

      <View style={styles.seats}>
        {table.seats.map(seat => (
          <Seat seat={seat} key={seat._id} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    flexDirection: "column",
    borderWidth: 0.5,
    borderColor: theme.colors.altDark,
    margin: theme.spacing.m,
    padding: theme.spacing.m
  },
  seats: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  }
});
