import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrayerScreen from './PrayerScreen';

const Stack = createStackNavigator();

class PrayerStack extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen component={PrayerScreen} name="Prayer" title="Prayer" options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        );
    }
}

export default PrayerStack;