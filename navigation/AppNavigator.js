//Sample application navigator between screens
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import AdminScreen from "../screens/AdminScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Regisytation" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
}
// This navigator handles the main flow of the application, allowing users to navigate between Home, Menu, Checkout, and Admin screens.
// It uses React Navigation's Stack Navigator to manage the screen transitions and navigation state. Each screen
