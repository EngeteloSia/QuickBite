import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OrdersScreen from './screens/OrdersScreen';
//import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

// Home screen content here
//Sample home screen
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍔 Welcome to QuickBite</Text>
      <Text style={styles.subtext}>Order delicious meals, fast and easy.</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerStyle: { backgroundColor: '#fff' },
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
        //We can add the other screens here for now. Just copy paste the component☝️
        
// we can style in-file no need for external CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e91e63',
  },
  subtext: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});
