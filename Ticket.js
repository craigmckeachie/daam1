import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Title from "./Title";
import { host } from "./store/api_host_maker";
import { theme } from "./theme";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function Ticket() {
  const navigation = useNavigation();
  const ticket_number = getRandomInt(50000, 1000000);
  const film = useSelector(state => state.selected_film);
  const showing = useSelector(state => state.selected_showing);
  const showing_time = new Date(showing.showing_time);
  console.log(film);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.screen}>
        <Text>
          We're looking forwad to seeing you! Show this to your host when you
          arrive. This is your ticket.
        </Text>
        <View style={styles.posterContainer}>
          <Image
            source={{ uri: `${host}/${film.poster_path}` }}
            style={styles.poster}
          />
          <Title>{film.title}</Title>
        </View>
        <Text style={theme.text.subtitle}>
          {showing_time.toShowingDateString()}{" "}
          {showing_time.toShowingTimeString()}
        </Text>
        <Text style={theme.text.subtitle}>Ticket Number: {ticket_number}</Text>
        <Button
          title="Look for Another Movie"
          onPress={() => navigation.popToTop()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: theme.spacing.m,
    flex: 1
  },
  posterContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 30
  },
  poster: {
    height: 160,
    width: 100,
    resizeMode: "contain",
    flex: 1
  }
});
