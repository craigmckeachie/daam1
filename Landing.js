import React from "react";
import { View, Text } from "react-native";
import FilmBrief from "./FilmBrief";

export default function Landing({ films }) {
  return (
    <View>
      <View>
        <Text>Dinner And a Movie.</Text>
        <Text>Tap a film to see the details. Pick a date to see showtimes</Text>
      </View>
      {films.map(film => {
        return <FilmBrief key={film.id} film={film} />;
      })}
    </View>
  );
}
