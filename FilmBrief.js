import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { host } from "./store/api_host_maker";
import { useDispatch } from "react-redux";
import Title from "./Title";
import { theme } from "./theme";

export default function FilmBrief({ film }) {
  const dispatch = useDispatch();
  function selectThisFilm() {
    dispatch({ type: "SET_SELECTED_FILM", film });
    dispatch({ type: "SHOW_FILM_DETAILS" });
  }
  return (
    <Pressable onPress={() => selectThisFilm()}>
      <View key={film.id} style={styles.item}>
        <Image
          source={{ uri: `${host}/${film.poster_path}` }}
          style={{ height: 150, width: 100 }}
          resizeMode="contain"
        />
        <View style={styles.filmText}>
          <Title>{film.title}</Title>
          <Text style={theme.text.normal}>{film.tagline}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row"
  },
  filmText: {
    flex: 1
  }
});
