// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PrayersScreen from './src/screens/PrayersScreen';
import QuranScreen from './src/screens/QuranScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuranScreen from './src/screens/Quran/QuranScreen';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Quran"
              onPress={() => navigation.navigate('Quran')}
          />
        </View>
    );
}

const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
              // iconName = focused
              //   ? 'ios-information-circle'
              //   : 'ios-information-circle-outline';
            } else if (route.name === 'Prayers') {
              iconName = 'ios-alarm';
            } else if (route.name === "Quran") {
              iconName = 'ios-book';
            } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Prayers" component={PrayersScreen} />
        <Stack.Screen name="Quran" component={QuranScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;