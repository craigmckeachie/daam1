import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

export default function Landing({ films }) {
  return (
    <View>
      <View>
        <Text>Dinner And a Movie.</Text>
        <Text>Tap a film to see the details. Pick a date to see showtimes</Text>
      </View>
      {films.map(film => {
        return (
          <View key={film.id}>
            <Text>{film.title}</Text>
            <Text>{film.tagline}</Text>
          </View>
        );
      })}
    </View>
  );
}
