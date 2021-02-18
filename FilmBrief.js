import React from "react";
import { View, Text, Image } from "react-native";
import { host } from "./store/api_host_maker";

export default function FilmBrief({ film }) {
  return (
    <View key={film.id}>
      <Image
        source={{ uri: `${host}/${film.poster_path}` }}
        style={{ height: 100, width: 100 }}
        resizeMode="contain"
      />

      <Text>{film.title}</Text>
      <Text>{film.tagline}</Text>
    </View>
  );
}
