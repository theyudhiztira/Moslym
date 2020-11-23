import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuranScreen from './QuranScreen';
import ChapterScreen from '../Chapters/ChapterScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

class QuranStack extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        return this.props.navigation.setOptions({
            tabBarVisible: getFocusedRouteNameFromRoute(this.props.route) !== 'Chapter'
        });
    }

    render() { 
        return (
            <Stack.Navigator>
                <Stack.Screen component={QuranScreen} name="Qur'an" title="Qur'an" options={{
                    headerShown: false
                }} />
                <Stack.Screen component={ChapterScreen} name='Chapter' options={{ 
                    headerShown: true
                }} />
            </Stack.Navigator>
        );
    }
}

export default QuranStack;