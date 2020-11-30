import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { Value, timing } = Animated;

class PlayerPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (<Animated.View style={{  
            flexDirection: 'row',
            position: "absolute",
            borderRadius: 0,
            bottom: 0,
            backgroundColor: "#4CCD7A",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            width: "100%",
            zIndex: 1000,
            height: this.props.fadeAnim,
            padding: 15,
            borderTopStartRadius: 13,
            borderTopEndRadius: 13
        }}>
            <View style={{  
                flex: 1,
                paddingTop: 5
            }}>
                <Text style={style.chapterName}>{this.props.chapterData.name_complex} {this.props.currentIndex > 0 ? `- ${this.props.currentIndex}` : ""}</Text>
                <Text style={style.reciterName}>Mishari Rashid Alfasy</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <TouchableOpacity onPress={this.props.backwardTap}><Ionicons style={style.touchableIcon} name='ios-skip-backward' size={41} color='#fff' /></TouchableOpacity>
                <TouchableOpacity onPress={this.props.playTap}><Ionicons style={style.touchableIcon} name='ios-play' size={41} color='#fff' /></TouchableOpacity>
                <TouchableOpacity onPress={this.props.forwardTap}><Ionicons style={style.touchableIcon} name='ios-skip-forward' size={41} color='#fff' /></TouchableOpacity>
            </View>
        </Animated.View>);
    }
}

const style = StyleSheet.create({
    touchableIcon: {
        paddingHorizontal: 15,
        paddingTop: 5,
        textAlign: "right"
    },
    chapterName: {  
        color: '#fff',
        fontWeight: '600',
        fontSize: 17
    },
    reciterName: {
        color: '#EBEBEB'
    }
})

export default PlayerPanel;