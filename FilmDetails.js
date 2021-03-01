import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from "react-native";
import ShowingTimes from "./ShowingTimes";
import { host } from "./store/api_host_maker";
import { theme } from "./theme";
import Title from "./Title";

export default function FilmDetails({ film, selected_date, showings = [] }) {
  showings = [
    { id: 1, showing_time: new Date().setHours(13) },
    { id: 2, showing_time: new Date().setHours(16) },
    { id: 3, showing_time: new Date().setHours(17) },
    { id: 4, showing_time: new Date().setHours(19) }
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ margin: theme.spacing.s, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.posterContainer}>
            <Image
              source={{ uri: `${host}/${film.poster_path}` }}
              style={styles.poster}
            />
          </View>
          <ShowingTimes selected_date={selected_date} showings={showings} />
          <Title>{film.title}</Title>
          <Text style={theme.text.normal}>{film.tagline}</Text>
          <Text style={theme.text.normal}>{film.homepage}</Text>
          <Text style={theme.text.normal}>{film.overview}</Text>
          <Text style={theme.text.normal}>
            Release date:{new Date(film.release_date).toDateString()}
          </Text>
          <Text style={theme.text.normal}>
            Duration: {film.runtime} minutes
          </Text>
          <View style={styles.rating}>
            <Text style={theme.text.normal}>
              Rating {film.vote_average}/{" "}
              <Text style={theme.text.note}>10</Text>
            </Text>
            <Text style={theme.text.normal}>{film.vote_count} votes</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  posterContainer: {
    flex: 1,
    alignItems: "center"
  },
  poster: {
    width: 158,
    height: 225,
    margin: theme.spacing.m,
    resizeMode: "contain"
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
