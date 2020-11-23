import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem, Avatar } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]

const BoxTime = (props) => (
    // <View style={styles.boxSimple}>
    //     <Text style={styles.title}>
    //         {props.title}
    //     </Text>
    //     <Text style={styles.time}>
    //         <Ionicons name={props.logo}></Ionicons> {props.time}
    //     </Text>
    // </View>

    <View style={styles.list}>
    {
        list.map((l, i) => (
        <ListItem key={i} bottomDivider>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        ))
    }
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
    list: {
        width: '100%'
    }
})

export default BoxTime;