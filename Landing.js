import React, { useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import FilmBrief from "./FilmBrief";

export default function Landing({ films, selected_date }) {
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
    <ScrollView>
      <View>
        <Text>Dinner And a Movie.</Text>
        <Text>Tap a film to see the details. Pick a date to see showtimes</Text>
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
        return <FilmBrief key={film.id} film={film} />;
      })}
    </ScrollView>
  );
}
