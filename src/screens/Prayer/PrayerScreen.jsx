import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';
import BoxTime from './components/BoxTime';
import { StatusBar } from 'expo-status-bar';

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

    loadPrayersTime = (lat, long) => {
        Axios.get(`${apiUrl}?longitude=${long}&latitude=${lat}`)
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
        navigator.geolocation.getCurrentPosition((position) => {
            this.loadPrayersTime(position.coords.latitude, position.coords.longitude)
        }, (error) => {
            alert(JSON.stringify(error))
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        });

        
    }

    listPrayersTime = () => {
        if (!this.state.isLoading) {

            const prayersTime = this.state.prayersTime.times;

            return <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                {/* <BoxTime title="Sunrise" time={prayersTime.Sunrise} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Sunset" time={prayersTime.Sunset} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Imsak" time={prayersTime.Imsak} logo="ios-sunny">
                </BoxTime>

                <BoxTime title="Midnight" time={prayersTime.Midnight} logo="ios-sunny">
                </BoxTime> */}

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

    renderPrayerTime = () => {
        return <ScrollView style={{ width: '100%' }}>
            {this.listPrayersTime()}
        </ScrollView>
    }

    render() {

        return (
                <SafeAreaView style={{ width: '100%' }}>
                    <Text style={styles.title}>Prayers Time</Text>
                    {this.state.isLoading ? <ActivityIndicator style={{ marginTop: '80%' }} /> : this.renderPrayerTime()}
                    <StatusBar style='dark' />
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
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 7,
        marginTop: 5
    },
});

export default PrayerScreen;