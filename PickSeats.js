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
import { useRoute, useNavigation } from "@react-navigation/native";

export default function PickSeats() {
  const navigation = useNavigation();
  const route = useRoute();
  const showing = route.params.showing;
  const showing_time = new Date(showing.showing_time);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin: theme.spacing.xl }}>
        <View style={styles.heading}>
          <Text style={theme.text.note}>Choose your seats for</Text>
          <Title>Movie Title</Title>
          <Text style={theme.text.note}>on</Text>
          <Text style={theme.text.note}>
            {`${showing_time.toShowingDateString()} at ${showing_time.toShowingTimeString()}`}
          </Text>
        </View>
        <ScrollView>
          {tables.map(table => (
            <Table key={table.id} table={table} />
          ))}
        </ScrollView>
        <View styles={styles.actionRow}>
          <Button
            title="Check out"
            onPress={() => navigation.navigate("Checkout")}
          />
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
