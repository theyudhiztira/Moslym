import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const BoxTime = (props) => (
    <View style={styles.boxSimple}>
        <Text style={styles.title}>
            {props.title}
        </Text>
        <Text style={styles.time}>
            <Ionicons name={props.logo}></Ionicons> {props.time}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    boxSimple: {
        backgroundColor: '#fdcfdf',
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        width: '100%'
    },

    title: {
        fontWeight: 'bold'
    },

    time: {
        fontStyle: 'italic'
    },
})

export default BoxTime;