import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Button,
  Modal
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import FilmBrief from "./FilmBrief";
import FilmDetails from "./FilmDetails";

export default function Landing({
  films,
  selected_date,
  selected_film,
  show_film_details
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
        <FilmDetails selected_date={selected_date} film={selected_film} />

        <Button
          title="Done"
          onPress={() => dispatch({ type: "HIDE_FILM_DETAILS" })}
        />
      </Modal>
      <ScrollView>
        <View>
          <Text>Dinner And a Movie.</Text>
          <Text>
            Tap a film to see the details. Pick a date to see showtimes
          </Text>
          <Button
            onPress={showDatepicker}
            title={`Showing times for ${selected_date.toDateString()} `}
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
