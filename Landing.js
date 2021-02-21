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
        <Text>
          Film Detail: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas aspernatur aliquam aut sapiente repellendus libero impedit
          adipisci placeat voluptatibus saepe error sit pariatur, ipsum at
          perspiciatis id obcaecati cum autem.
        </Text>

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
