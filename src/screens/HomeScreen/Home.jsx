import React, {Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
                            
                            <TouchableOpacity style={styles.buttonWhite}>
                                <View>
                                    <Text style={styles.textAlignCenter}>
                                        Arah Kiblat
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.card}>

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
        flex:1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    card: {
        backgroundColor: '#fff',
        width:'100%',
        height: 400,
        borderRadius: 20
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