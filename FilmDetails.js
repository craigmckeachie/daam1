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
    { id: 1, showing_time: new Date().setHours(1) },
    { id: 2, showing_time: new Date().setHours(3) },
    { id: 3, showing_time: new Date().setHours(5) },
    { id: 4, showing_time: new Date().setHours(7) }
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.posterContainer}>
            <Image
              source={{ uri: `${host}/${film.poster_path}` }}
              style={styles.poster}
            />
          </View>
          <ShowingTimes selected_date={selected_date} showings={showings} />
          <Title>{film.title}</Title>
          <Text>{film.tagline}</Text>
          <Text>{film.homepage}</Text>
          <Text>{film.overview}</Text>
          <Text>Release date:{new Date(film.release_date).toDateString()}</Text>
          <Text>Duration: {film.runtime} minutes</Text>
          <View style={styles.rating}>
            <Text style={theme.text.normal}>
              Rating {film.vote_average}/{" "}
              <Text style={theme.text.note}>10</Text>
            </Text>
            <Text>{film.vote_count} votes</Text>
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
    width: 350,
    height: 350,
    resizeMode: "contain"
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
