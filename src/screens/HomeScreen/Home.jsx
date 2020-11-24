import React, {Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BoxTime from './components/BoxTime';
import MoslymButton from '../Components/Button';
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
                    
                    <View style={styles.header}>
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
                    </View>

                    <ScrollView>
                  
                        <SafeAreaView style={styles.flexWrapper}>
                    
                            <View style={styles.headline}>

                                <View>
                                    <Clock></Clock>
                                </View>

                                <View style={{flex:1, justifyContent: 'center', width:'100%', alignItems:'center'}}>

                                    <MoslymButton text='Arah Kiblat' width={150} bgColor='rgba(0,0,0,0.15)' textColor="#FFFFFF" btnIcon="ios-compass" />
                                
                                </View>
                         

                            </View>

                            <View style={styles.content}>

                                <BoxTime />

                            </View>

                        </SafeAreaView>
                   </ScrollView>
                </ImageBackground>
            </View>


      
        
        )
    }

}

const styles = StyleSheet.create({
    header:{
        marginTop:40,
        paddingLeft:10,
        paddingRight:10,
    },  
    flexMedia:{
        flexDirection: 'row'
    },
    textAlignCenter: {
        textAlign: 'center'
    },  
    flexWrapper:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
    },
    headline: {
        marginBottom:30,
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