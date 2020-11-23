import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import QuranStack from '../screens/Quran/QuranStack';


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
                <BottomTab.Navigator initialRouteName="InitialScreen" style={{  }}>
                    <BottomTab.Screen name="Home" component={HomeScreen} />
                    <BottomTab.Screen name="Qur'an" component={QuranStack} title="Qur'an" />
                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }
}
 
export default Navigation;