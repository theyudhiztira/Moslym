import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ChapterCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.props.data);
        return (
            <View style={style.viewContainer}>
                <Text>{this.props.data.name_arabic}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    viewContainer: {
        width: '100%'
    }
})

export default ChapterCard;