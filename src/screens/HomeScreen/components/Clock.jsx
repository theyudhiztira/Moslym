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
        return this.setState({ currentTime: moment().format('HH:mm:ss') });
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
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>Asr</Text>
                </View>
                <View style={{marginVertical: 5}}>
                    <Text style={styles.textTime}>{this.state.currentTime}</Text>
                </View>
                <View>
                    {/* <Text style={styles.textDate}>{moment().format('dddd, D MMM YYYY')}</Text> */}
                    <Text style={styles.textDate}>Remaining</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    clockBackground: {
        // backgroundColor: 'blue',
        // borderWidth: 4,
        // borderColor: "#fff",
        padding: 20,
        borderRadius: 20
    },
    headerText: {
        fontSize: 30,
        textAlign: "center",
        margin: 10,
        color: 'black',
        fontWeight: "bold"
    },
    textTime: {
        fontSize: 40,
        color: '#fff',
        letterSpacing: 3,
        fontWeight: 'bold'
    },
    daysText: {
        color: '#2196f3',
        fontSize: 25,
    },
    textDate: {
        color: 'white',
    },
    textTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})

export default Clock;