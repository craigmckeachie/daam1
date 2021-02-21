import React from "react";
import { View, ScrollView, Text } from "react-native";
import ShowingTimes from "./ShowingTimes";

export default function FilmDetails({ film, selected_date, showings = [] }) {
  showings = [
    { id: 1, showing_time: new Date().setHours(1) },
    { id: 2, showing_time: new Date().setHours(3) },
    { id: 3, showing_time: new Date().setHours(5) },
    { id: 4, showing_time: new Date().setHours(7) }
  ];
  return (
    <ScrollView>
      <View>
        <ShowingTimes selected_date={selected_date} showings={showings} />
        <Text>{film.title}</Text>
        <Text>{film.tagline}</Text>
        <Text>{film.overview}</Text>
        <Text>{film.release_date}</Text>
        <Text>{film.poster_path}</Text>
        <Text>{film.runtime}</Text>
        <Text>{film.popularity}</Text>
        <Text>{film.vote_average}</Text>
        <Text>{film.vote_count}</Text>
        <Text>{}</Text>
      </View>
    </ScrollView>
  );
}
