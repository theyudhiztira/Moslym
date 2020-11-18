import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class QuranCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Text>Indonesia {this.props.data}</Text>
            </View>
        );
    }
}

export default QuranCard;