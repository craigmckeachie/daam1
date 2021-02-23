import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button
} from "react-native";
import Title from "./Title";
import tables from "./assets/tables.json";
import { theme } from "./theme";

export default function PickSeats() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin: theme.spacing.xl }}>
        <View style={styles.heading}>
          <Text style={theme.text.note}>Choose your seats for</Text>
          <Title>Movie Title</Title>
          <Text style={theme.text.note}>on</Text>
          <Text style={theme.text.note}>
            {new Date().toShowingDateString()}
          </Text>
        </View>
        <ScrollView>
          {tables.map(table => (
            <View key={table.id} style={styles.table}>
              <Text style={theme.text.normal}>Table {table.table_number}</Text>

              <View style={styles.seats}>
                {table.seats.map(seat => (
                  <Text
                    style={[
                      theme.text.normal,
                      styles.seat,
                      seat.status === "seatIsTaken"
                        ? styles.selected
                        : { fontWeight: "bold" }
                    ]}
                    key={seat._id}
                  >
                    Seat {seat.seat_number}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
        <View styles={styles.actionRow}>
          <Button title="Check out" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing.l
  },
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
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  seat: {
    padding: theme.spacing.s,
    margin: theme.spacing.s,
    backgroundColor: theme.colors.altLight
  },
  selected: {
    backgroundColor: "#FCD34D"
  }
});
