import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button
} from "react-native";
import tables from "./assets/tables.json";


export default function PickSeats() {
  return (
    <SafeAreaView>
      <View>
        <Text>Choose your seats for</Text>
        <Text>Movie Title</Text>
        <Text>on</Text>
        <Text>{new Date().toShowingDateString()}</Text>
        <ScrollView>
          {tables.map(table => (
            <View key={table.id} style={styles.table}>
              <Text>Table {table.table_number}</Text>

              <View style={styles.seats}>
                {table.seats.map(seat => (
                  <Text key={seat._id}>Seat {seat.seat_number}</Text>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
        <View styles={styles.actionRow}>
          <Button title="Check out" style={styles.checkout} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  table: {
    flexDirection: "column"
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
  checkout: {}
});
