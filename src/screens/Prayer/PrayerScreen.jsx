import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';
import BoxTime from './components/BoxTime';
import Clock from './components/Clock';
import { StatusBar } from 'expo-status-bar';

const apiUrl = 'https://api.pray.zone/v2/times/today.json';

class PrayerScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={{ width: '100%' }}>
                <StatusBar style='dark' />
                <Clock></Clock>
                {/* <BoxTime></BoxTime> */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 7,
        marginTop: 5
    },
});

export default PrayerScreen;