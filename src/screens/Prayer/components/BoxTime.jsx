import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem, Avatar } from 'react-native-elements'

class BoxTime extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.list}>
                <ListItem>
                    {/* <Avatar source={{ uri: l.avatar_url }} /> */}
                    <ListItem.Content style={styles.listContent}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.titleText}>{this.props.title}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.timeText}>{this.props.time}</Text>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }


    // const BoxTime = (props) => (
    //     // <View style={styles.boxSimple}>
    //     //     <Text style={styles.title}>
    //     //         {props.title}
    //     //     </Text>
    //     //     <Text style={styles.time}>
    //     //         <Ionicons name={props.logo}></Ionicons> {props.time}
    //     //     </Text>
    //     // </View>

    //     <View style={styles.list}>
    //     {
    //         list.map((l, i) => (
    //         <ListItem key={i} bottomDivider>
    //             <Avatar source={{uri: l.avatar_url}} />
    //             <ListItem.Content>
    //                 <ListItem.Title>{l.name}</ListItem.Title>
    //                 <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
    //             </ListItem.Content>
    //         </ListItem>
    //         ))
    //     }
    //     </View>
    // )
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
        padding: 15
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