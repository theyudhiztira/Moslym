import React, {Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BoxTime from './components/BoxTime';
import MoslymButton from '../Components/Button';


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
                                <View>
                                    <Ionicons name='ios-locate' size={30} color='white'/>
                                </View>
                                <View>
                                    <Text style={styles.display1}> Jakarta </Text>
                                    <Text style={styles.display2}> Indonesia </Text>
                                </View>
                            </View>
                            
                            <MoslymButton text='Arah Kiblat' width={100} bgColor='#FFFFFF' textColor="#000000" />
                        
                        </View>

                        <View style={styles.content}>
                            
                                <BoxTime />

                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>
      
        
        )
    }

}

const styles = StyleSheet.create({
    flexMedia:{
        flex:1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
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
        height:100,
        marginBottom:30,
        marginTop:30,
    },
    display1: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: "700"
    },
    display2: {
        fontSize: 32,
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