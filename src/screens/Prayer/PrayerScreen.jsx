import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';
import BoxTime from './components/BoxTime';
import GetLocation from 'react-native-get-location'

const apiUrl = 'https://api.pray.zone/v2/times/today.json';

class PrayerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prayersTime: {},
            isLoading: true,
            locations: {
                mapRegion: null,
                lastLat: null,
                lastLong: null,
            }
        }
    }

    loadPrayersTime = () => {
        Axios.get(`${apiUrl}?city=tangerang`)
            .then(res => {
                this.setState({
                    prayersTime: res.data.results.datetime[0],
                    isLoading: false
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount = () => {
        this.loadPrayersTime();

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log(location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }

    listPrayersTime = () => {
        if (!this.state.isLoading) {

            const prayersTime = this.state.prayersTime.times;

            return <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                <BoxTime title="Sunrise" time={prayersTime.Sunrise} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Sunset" time={prayersTime.Sunset} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Imsak" time={prayersTime.Imsak} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Midnight" time={prayersTime.Midnight} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Fajr" time={prayersTime.Fajr} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Dhuhr" time={prayersTime.Dhuhr} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Asr" time={prayersTime.Asr} logo="ios-partly-sunny">
                </BoxTime>

                <BoxTime title="Maghrib" time={prayersTime.Maghrib} logo="ios-cloudy-night">
                </BoxTime>

                <BoxTime title="Isha" time={prayersTime.Isha} logo="ios-moon">
                </BoxTime>
            </View>;
        }
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Prayers Time</Text>

                

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: '10%'}}>
                        {this.listPrayersTime()}
                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    title: {
        marginTop: Constants.statusBarHeight,
        fontSize: 42,
        textAlign: 'center'
    },
    contentContainer: {
        marginTop: '5%',
        width: '100%'
    },
});

export default PrayerScreen;