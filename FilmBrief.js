import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { host } from "./store/api_host_maker";
import { useDispatch } from "react-redux";

export default function FilmBrief({ film }) {
  const dispatch = useDispatch();
  function selectThisFilm() {
    dispatch({ type: "SET_SELECTED_FILM", film });
  }
  return (
    <Pressable onPress={() => selectThisFilm()}>
      <View key={film.id}>
        <Image
          source={{ uri: `${host}/${film.poster_path}` }}
          style={{ height: 100, width: 100 }}
          resizeMode="contain"
        />
        <Text>{film.title}</Text>
        <Text>{film.tagline}</Text>
      </View>
    </Pressable>
  );
}
