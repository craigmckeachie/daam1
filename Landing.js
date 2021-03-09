import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Button,
  Modal,
  Image,
  StyleSheet
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import FilmBrief from "./FilmBrief";
import FilmDetails from "./FilmDetails";
import "./helpers/Date";
import { theme } from "./theme";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default function Landing({
  films,
  selected_date,
  selected_film,
  show_film_details,
  showings = []
}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  function showDatepicker() {
    setShow(previousShow => !previousShow);
  }
  function onChange(event, selectedDate) {
    const currentDate = selectedDate || selected_date;
    setShow(previousShow => !previousShow);
    dispatch({ type: "SET_SELECTED_DATE", date: currentDate });
  }

  return (
    <SafeAreaView>
      <Modal visible={show_film_details}>
        <FilmDetails
          selected_date={selected_date}
          film={selected_film}
          showings={showings}
        />
        <Button
          title="Done"
          onPress={() => dispatch({ type: "HIDE_FILM_DETAILS" })}
        />
      </Modal>
      <ScrollView style={{ margin: theme.spacing.l }}>
        <View>
          <View style={styles.header}>
            <Image
              source={require("./assets/daam-logo.png")}
              style={{ width: 150, height: 84 }}
            />
            <Text style={theme.text.title}>Dinner And a Movie.</Text>
          </View>
          <Text style={theme.text.normal}>
            Tap a film to see the details. Pick a date to see showtimes
          </Text>
          <Button
            onPress={showDatepicker}
            title={`Showing times for ${selected_date.toShowingDateString()} `}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={selected_date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        {films.map(film => {
          return (
            <FilmBrief
              key={film.id}
              film={film}
              isSelected={film === selected_film}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
