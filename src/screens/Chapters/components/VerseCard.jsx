import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';

class VerseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const data = this.props.data;

        return (
            <TouchableOpacity>
                <View style={Style.cardContainer}>
                    <Text style={Style.arabicText}>{data.text}</Text>
                    <Text style={Style.translation}>{ data.verse_number > 0 ? `${data.verse_number}. ` : ""}{data.translation_indonesian}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const Style = StyleSheet.create({
    cardContainer: {
        flex: 1,
        paddingVertical: 25,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1
    },
    arabicText: {
        textAlign: 'right',
        fontSize: 25,
        fontWeight: '500',
        paddingHorizontal: 19,
        lineHeight: 55
    },
    translation: {
        marginTop: 7,
        paddingLeft: 19,
        paddingRight: 19,
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'justify',
        color: '#53555A'
    }
})

export default VerseCard;