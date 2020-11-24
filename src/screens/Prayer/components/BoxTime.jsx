import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from 'react-native'
import { ListItem } from 'react-native-elements'
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

            return <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                {this.listPrayersTime("Fajr", prayersTime.Fajr)}

                {this.listPrayersTime("Dhuhr", prayersTime.Dhuhr)}

                {this.listPrayersTime("Asr", prayersTime.Asr)}

                {this.listPrayersTime("Maghrib", prayersTime.Maghrib)}

                {this.listPrayersTime("Isha", prayersTime.Isha)}

            </View>;
        }
    }

    listPrayersTime = (title, time) => {
        return <View style={styles.list}>
            <ListItem bottomDivider>
                <ListItem.Content style={styles.listContent}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.titleText}>{title}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.timeText}>{time}</Text>
                        </View>
                    </View>
                </ListItem.Content>
            </ListItem>
        </View>
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
    title: {
        fontWeight: 'bold'
    },

    time: {
        fontStyle: 'italic'
    },
    list: {
        width: '100%',
    },
    listContent: {
        padding: 15,
    },
    viewSideBySide: {
        flex: 1,
        flexDirection: 'row',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent: 'flex-start',
        textAlign: 'left'
    },
    timeText: {
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent: 'flex-end',
        textAlign: 'right'
    }
})

export default BoxTime;