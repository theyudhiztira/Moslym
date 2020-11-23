import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ImageBackground } from 'react-native';
import moment from 'moment';

const image = { uri: "https://reactjs.org/logo-og.png" };

class Clock extends Component {

    constructor() {
        super();

        this.state = { currentTime: null, currentDay: null, currentDate: null, currentMonth: null, currentYear: null }
        this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        this.monthsArray = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    }

    getCurrentTime = () => {
        return moment().format('HH:mm:ss');
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.getCurrentTime();

        // this._interval = setInterval(() => {
        //     // Your code
        // }, 5000);
    }

    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.daysText}>{this.state.currentDay}</Text>
                {/* <Text style={styles.timeText}>{this.getCurrentTime()}</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    headerText: {
        fontSize: 30,
        textAlign: "center",
        margin: 10,
        color: 'black',
        fontWeight: "bold"
    },
    timeText: {
        fontSize: 50,
        color: '#f44336'
    },
    daysText: {
        color: '#2196f3',
        fontSize: 25,
        paddingBottom: 0
    },
    dateText: {
        color: 'black',
        paddingBottom: 0
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})

export default Clock;