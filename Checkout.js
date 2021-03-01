import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import { theme } from "./theme";

export default function Checkout(props) {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [creditCard, setCreditCard] = useState(props.creditCard);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  function purchase() {
    navigation.navigate("Ticket");
  }
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="position">
        <ScrollView style={{ margin: theme.spacing.l }}>
          <Text style={theme.text.headline}>Checkout</Text>
          <View style={styles.cart}>
            <View style={styles.row}>
              <Text style={theme.text.normal}>Table 10, Seat 3</Text>
              <Text style={theme.text.normal}>12.00</Text>
            </View>
            <View style={styles.row}>
              <Text style={theme.text.normal}>Table 10, Seat 4</Text>
              <Text style={theme.text.normal}>12.00</Text>
            </View>
            <View style={styles.row}>
              <Text style={theme.text.normal}>Table 10, Seat 5</Text>
              <Text style={theme.text.normal}>12.00</Text>
            </View>
            <View style={styles.row}>
              <Text
                style={[theme.text.normal, { flex: 3, textAlign: "right" }]}
              >
                Subtotal
              </Text>
              <Text
                style={[theme.text.normal, { flex: 1, textAlign: "right" }]}
              >
                36.00
              </Text>
            </View>
            <View style={styles.row}>
              <Text
                style={{ ...theme.text.normal, flex: 3, textAlign: "right" }}
              >
                Tax
              </Text>
              <Text
                style={{ ...theme.text.normal, flex: 1, textAlign: "right" }}
              >
                3.02
              </Text>
            </View>
            <View style={styles.row}>
              <Text
                style={{ ...theme.text.normal, flex: 3, textAlign: "right" }}
              >
                Total
              </Text>
              <Text
                style={{ ...theme.text.normal, flex: 1, textAlign: "right" }}
              >
                39.02
              </Text>
            </View>
          </View>
          <Text style={theme.text.normal}>First Name</Text>
          <TextInput
            style={theme.text.input}
            value={firstName}
            onChangeText={setFirstName}
          />
          <Text style={theme.text.normal}>Last Name</Text>
          <TextInput
            style={theme.text.input}
            value={lastName}
            onChangeText={setLastName}
          />
          <Text style={theme.text.normal}>Email</Text>
          <TextInput
            style={theme.text.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text style={theme.text.normal}>Phone</Text>
          <TextInput
            style={theme.text.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <Text style={theme.text.normal}>Credit Card</Text>
          <TextInput
            style={theme.text.input}
            value={creditCard}
            onChangeText={setCreditCard}
            keyboardType="number-pad"
          />
          <Button title="Purchase" onPress={purchase} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  cart: {
    borderWidth: 1,
    borderColor: theme.colors.altDark,
    padding: theme.spacing.s
  }
});
