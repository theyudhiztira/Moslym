import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import QuranStack from '../screens/Quran/QuranStack';
import PrayerStack from '../screens/Prayer/PrayerStack';
import Ionicons from 'react-native-vector-icons/Ionicons';


const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const InitialScreen = (props) => {
    const { navigation } = props;
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Quran')}
            />
        </View>
    )
}

const HomeScreen = (props) => {
    const {navigation} = props;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Quran')}
            />
        </View>
    );
}

class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <NavigationContainer>
                <BottomTab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = 'ios-home';
                            } else if (route.name === 'Prayer Time') {
                                iconName = 'ios-time';
                            } else if (route.name === "Qur'an") {
                                iconName = 'ios-book';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'blue',
                        inactiveTintColor: 'gray',
                    }}
                    initialRouteName="InitialScreen"
                >
                
                    <BottomTab.Screen name="Home" component={HomeScreen} />
                    <BottomTab.Screen name="Prayer Time" component={PrayerStack} title="Prayer Time" />
                    <BottomTab.Screen name="Qur'an" component={QuranStack} title="Qur'an" />
                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }
}
 
export default Navigation;