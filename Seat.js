import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function Seat({ seat }) {
  return (
    <Text
      style={[
        theme.text.normal,
        styles.seat,
        seat.status === "seatIsTaken" ? styles.reserved : { fontWeight: "bold" }
      ]}
    >
      Seat {seat.seat_number}
    </Text>
  );
}

const styles = StyleSheet.create({
  seat: {
    ...theme.text.normal,
    padding: theme.spacing.s,
    margin: theme.spacing.s,
    backgroundColor: theme.colors.altLight
  },
  reserved: {
    backgroundColor: "#FCD34D"
  }
});
