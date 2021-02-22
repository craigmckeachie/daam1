import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button
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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            laudantium similique harum quos consequatur eaque! Quis harum cum
            vel ducimus porro quam repellat, consequuntur officiis doloribus
            atque libero fuga hic! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat laudantium similique harum quos consequatur
            eaque! Quis harum cum vel ducimus porro quam repellat, consequuntur
            officiis doloribus atque libero fuga hic! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat laudantium similique harum quos
            consequatur eaque! Quis harum cum vel ducimus porro quam repellat,
            consequuntur officiis doloribus atque libero fuga hic! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugiat laudantium
            similique harum quos consequatur eaque! Quis harum cum vel ducimus
            porro quam repellat, consequuntur officiis doloribus atque libero
            fuga hic! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat laudantium similique harum quos consequatur eaque! Quis harum
            cum vel ducimus porro quam repellat, consequuntur officiis doloribus
            atque libero fuga hic! Lorem ipsum dolor sit amet consectetur
            adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Illum facilis ullam dolorem temporibus ipsa, doloribus
            aspernatur sapiente consequuntur a sit accusantium laudantium quas
            molestias architecto placeat deleniti asperiores ex non? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Esse laudantium amet
            quia dolores expedita rerum! Earum mollitia recusandae, culpa atque
            accusantium pariatur officiis officia optio qui assumenda tempore
            harum aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Rem placeat consectetur nesciunt atque soluta voluptatum modi
            in repellendus laboriosam molestiae maiores repellat voluptate,
            recusandae, aperiam deserunt, sit earum quod. Alias? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugiat laudantium
            similique harum quos consequatur eaque! Quis harum cum vel ducimus
            porro quam repellat, consequuntur officiis doloribus atque libero
            fuga hic! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat laudantium similique harum quos consequatur eaque! Quis harum
            cum vel ducimus porro quam repellat, consequuntur officiis doloribus
            atque libero fuga hic! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat laudantium similique harum quos consequatur
            eaque! Quis harum cum vel ducimus porro quam repellat, consequuntur
            officiis doloribus atque libero fuga hic! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat laudantium similique harum quos
            consequatur eaque! Quis harum cum vel ducimus porro quam repellat,
            consequuntur officiis doloribus atque libero fuga hic! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugiat laudantium
            similique harum quos consequatur eaque! Quis harum cum vel ducimus
            porro quam repellat, consequuntur officiis doloribus atque libero
            fuga hic! Lorem ipsum dolor sit amet consectetur adipisicing Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Illum facilis
            ullam dolorem temporibus ipsa, doloribus aspernatur sapiente
            consequuntur a sit accusantium laudantium quas molestias architecto
            placeat deleniti asperiores ex non? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Esse laudantium amet quia dolores
            expedita rerum! Earum mollitia recusandae, culpa atque accusantium
            pariatur officiis officia optio qui assumenda tempore harum aperiam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            placeat consectetur nesciunt atque soluta voluptatum modi in
            repellendus laboriosam molestiae maiores repellat voluptate,
            recusandae, aperiam deserunt, sit earum quod. Alias.
          </Text>
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
