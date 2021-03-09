import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button
} from "react-native";
import Title from "./Title";
import { theme } from "./theme";
import Table from "./Table";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function PickSeats() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const showing = route.params.showing;
  const showing_time = new Date(showing.showing_time);
  const tables = useSelector(state => state.tables);
  const selected_film = useSelector(state => state.selected_film);
  const selected_date = useSelector(state => state.selected_date);

  useEffect(() => {
    dispatch({
      type: "FETCH_TABLES_AND_SEATS",
      theater_id: showing.theater_id
    });
    dispatch({ type: "FETCH_RESERVATIONS", showing_id: showing.id });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin: theme.spacing.xl }}>
        <View style={styles.heading}>
          <Text style={theme.text.note}>Choose your seats for</Text>
          <Title>{selected_film.title}</Title>
          <Text style={theme.text.note}>on</Text>
          <Text style={theme.text.note}>
            {`${new Date(
              selected_date
            ).toShowingDateString()} at ${showing_time.toShowingTimeString()}`}
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
