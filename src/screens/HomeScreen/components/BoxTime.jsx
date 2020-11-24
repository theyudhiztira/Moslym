import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';

const apiUrl = 'https://api.pray.zone/v2/times/today.json';

class BoxTime extends Component {

    constructor(props) {
        super(props);
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

    prayersTime = () => {
        if (!this.state.isLoading) {

            const prayersTime = this.state.prayersTime.times;

            return <View style={{ flex:1, alignItems: 'stretch', justifyContent: 'center', width: '100%' }}>

                {this.listPrayersTime("Fajr", prayersTime.Fajr)}

                {this.listPrayersTime("Dhuhr", prayersTime.Dhuhr)}

                {this.listPrayersTime("Asr", prayersTime.Asr)}

                {this.listPrayersTime("Maghrib", prayersTime.Maghrib)}

                {this.listPrayersTime("Isha", prayersTime.Isha)}

            </View>;
        }
    }

    listPrayersTime = (title, time) => {
        return ( 
        <View style={styles.listWrapper}>
            <View style={styles.prayerIcon}>
                <Ionicons name='ios-locate' size={30} color='#0EA17'/>            
            </View>
            <View style={styles.prayerContent}>
                <Text style={styles.prayerTitle}>
                    {title}
                </Text>
            </View>
            <View style={styles.prayerTime}>
                <Text>{time}</Text>
            </View>
        </View> 
        )
    }

    renderPrayerTime = () => {
        return <ScrollView style={{ width: '100%' }}>
            {this.prayersTime()}
        </ScrollView>
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator style={{ marginTop: '80%' }} /> : this.renderPrayerTime()
        )
    }
}

const styles = StyleSheet.create({
    prayerContent:{
        marginLeft: 10
    },
    prayerTitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    prayerTime: {
        marginLeft: 'auto'
    },
    listWrapper:{
        flex:1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:15,
        paddingRight:15,
        borderRadius: 10
    },
})

export default BoxTime;