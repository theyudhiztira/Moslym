import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// components
import BoxPrayersTime from './Components/BoxPrayersTime';

class PrayersScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>PrayersScreen</Text>

                    <BoxPrayersTime title="Subuh" time="04.30" logo="ios-sunny">
                    </BoxPrayersTime>

                    <BoxPrayersTime title="Dzuhur" time="12.00" logo="ios-sunny">
                    </BoxPrayersTime>

                    <BoxPrayersTime title="Ashar" time="15.30" logo="ios-partly-sunny">
                    </BoxPrayersTime>

                    <BoxPrayersTime title="Maghrib" time="18.00" logo="ios-cloudy-night">
                    </BoxPrayersTime>

                    <BoxPrayersTime title="Isya" time="19.00" logo="ios-moon">
                    </BoxPrayersTime>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});

export default PrayersScreen;