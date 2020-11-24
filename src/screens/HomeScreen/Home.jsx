import React, {Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BoxTime from './components/BoxTime';
import Clock from './components/Clock';


class Home extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const backgroundImage = require('../../../assets/homeScreenBackground.png');

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <SafeAreaView style={styles.flexWrapper}>
                        <View style={styles.headline}>

                            <View style={styles.flexMedia}>
                                <View style={{ flex: '1', flexDirection: 'row' }}>
                                    <EvilIcons name="location" size={30} color="white" style={{ justifyContent: 'flex-start', textAlign: 'left' }}/>
                                    <View>
                                        <Text style={styles.textCity}>Jakarta</Text>
                                        <Text style={styles.textCountry}>Indonesia</Text>
                                    </View>
                                </View>
                                <View style={{ flex: '1' }}>
                                    <EvilIcons name="gear" size={30} color="white" style={{ justifyContent: 'flex-end', textAlign: 'right' }}/>
                                </View>
                            </View>

                            <View>
                                <Clock></Clock>
                            </View>
                            
                            {/* <TouchableOpacity style={styles.buttonWhite}>
                                <View>
                                    <Text style={styles.textAlignCenter}>
                                        Arah Kiblat
                                    </Text>
                                </View>
                            </TouchableOpacity> */}
                        </View>
                        <View style={styles.content}>
                            <View style={styles.card}>
                                {/* <BoxTime></BoxTime> */}
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>
      
        
        )
    }

}

const styles = StyleSheet.create({
    flexMedia:{
        flexDirection: 'row'
    },
    textAlignCenter: {
        textAlign: 'center'
    },  
    buttonWhite: {
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 10,
        paddingBottom: 10,
        width: 100,
        borderRadius: 6,
        marginTop: 20,
        marginLeft: 6,
        backgroundColor: 'white',
    },
    flexWrapper:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
    },
    headline: {
        height:100,
        marginBottom:30,
        marginTop:30,
        paddingHorizontal: 10
    },
    card: {
        backgroundColor: '#fff',
        width:'100%',
        height: 'auto',
        borderRadius: 20,
        overflow: 'hidden'
    },
    textCity: {
        fontSize: 15,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: "700"
    },
    textCountry: {
        fontSize: 10,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 2,
        opacity: 0.9

    },
    textTittle: {
        fontWeight: "600",
        fontSize: 22,
        textAlign: 'center',
    },
    backgroundImage: { 
        width: '100%',
        height: '100%',
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center'
    }
})

export default Home;