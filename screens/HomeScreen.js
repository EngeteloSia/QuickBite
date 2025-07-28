// HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to PreOrder App 🍽️</Text>
      <Button title="View Menu" onPress={() => navigation.navigate("Menu")} />
    </View>
  );
}
