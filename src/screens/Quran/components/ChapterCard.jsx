import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();
class ChapterCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={style.cardContainer} onPress={this.props.onPress}>
                <View style={style.numberContainer}>
                    <Text style={{ 
                        fontSize: 15,
                        textAlign: 'right'
                    }}>{this.props.data.id}.</Text>
                </View>
                <View style={style.latinContainer}>
                    <Text style={{ 
                        fontSize: 17,
                    }}>{this.props.data.name_simple} <Text>( {this.props.data.verses_count} )</Text></Text>
                    <Text style={{ color: '#53555A' }}>{this.props.data.translated_name.name}</Text>
                </View>
                <View style={style.arabicContainer}>
                    <Text style={{ 
                        alignSelf: 'flex-end',
                        fontSize: 21
                    }}>{this.props.data.name_arabic}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    cardContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        borderTopColor: '#dedede',
        borderBottomColor: '#dedede',
        borderBottomWidth: 1
    },
    numberContainer: { 
        height: 'auto',
        justifyContent: 'center',
        marginRight: 19,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'flex-end',
        width: 35
    },
    latinContainer: { 
        height: 'auto',
        justifyContent: 'center',
        marginRight: 19,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'flex-start',
        width: 'auto'
    },
    arabicContainer: { 
        height: 'auto',
        justifyContent: 'center',
        marginRight: 19,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'flex-end',
        flex: 1,
        // width: 200
    }
})

export default ChapterCard;