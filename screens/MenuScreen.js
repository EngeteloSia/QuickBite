//Sample MenuScreen.js

import React from "react";
import { View, FlatList, Button, Text } from "react-native";

const sampleMenu = [
  { id: "1", name: "Chicken Wrap", available: true },
  { id: "2", name: "Vegan Salad", available: false },
];

export default function MenuScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={sampleMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>
            {item.name} {item.available ? "" : "(Unavailable)"}
          </Text>
        )}
      />
      <Button title="Checkout" onPress={() => navigation.navigate("Checkout")} />
    </View>
  );
}
