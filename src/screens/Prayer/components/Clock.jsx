import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import moment from 'moment';

class Clock extends Component {

    constructor() {
        super();
        this.state = {
            currentTime: null,
        }
    }

    getCurrentTime = () => {
        return this.setState({currentTime: moment().format('HH:mm:ss')});
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.getCurrentTime()

        this.timer = setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    }

    render() {
        return (
            <View>
                <Text style={styles.timeText}>{this.state.currentTime}</Text>
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
        // color: '#f44336'
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