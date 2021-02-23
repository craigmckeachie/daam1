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
import Table from "./Table";

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
            <Table key={table.id} table={table} />
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
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
