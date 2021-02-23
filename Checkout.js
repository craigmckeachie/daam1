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

export default function Checkout(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [creditCard, setCreditCard] = useState(props.creditCard);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  function purchase() {
    console.log("purchased tickets");
  }
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <Text>Checkout</Text>
          <View>
            <View style={styles.row}>
              <Text>Table 10, Seat 3</Text>
              <Text>12.00</Text>
            </View>
            <View style={styles.row}>
              <Text>Table 10, Seat 4</Text>
              <Text>12.00</Text>
            </View>
            <View style={styles.row}>
              <Text>Table 10, Seat 5</Text>
              <Text>12.00</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ flex: 3, textAlign: "right" }}>Subtotal</Text>
              <Text style={{ flex: 1, textAlign: "right" }}>36.00</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ flex: 3, textAlign: "right" }}>Tax</Text>
              <Text style={{ flex: 1, textAlign: "right" }}>3.02</Text>
            </View>
            <View style={styles.row}>
              <Text style={{ flex: 3, textAlign: "right" }}>Total</Text>
              <Text style={{ flex: 1, textAlign: "right" }}>39.02</Text>
            </View>
          </View>
          <Text>First Name</Text>
          <TextInput value={firstName} onChangeText={setFirstName} />
          <Text>Last Name</Text>
          <TextInput value={lastName} onChangeText={setLastName} />
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text>Phone</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <Text>Credit Card</Text>
          <TextInput
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
  row: { flex: 1, flexDirection: "row", justifyContent: "space-between" }
});
