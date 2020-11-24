import React, { Component } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const backgroundImage = require('../../assets/splash.png');

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ImageBackground style={style.backgroundImage} source={backgroundImage}>
                    <SafeAreaView style={style.safeAreaContainer}>
                        <ActivityIndicator 
                            color='#fff'
                            style={style.loadingIndicator}
                        />
                        <Text style={style.loadingText}>Loading Data ...</Text>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    viewContainer: {
        
    },
    safeAreaContainer: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    backgroundImage: { 
        width: '100%',
        height: '100%',
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    loadingText: {
        position: 'absolute',
        bottom: 87,
        color: '#fff',
        fontWeight: '600'
    },
    loadingIndicator: {
        position: 'absolute',
        bottom: 115,
        color: '#fff',
        fontWeight: '600'
    }
});

export default SplashScreen;