import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChapterList from './components/ChaptersList';
class QuranScreen extends Component{
    state = { 
        search: ''
    };

    updateSearch = (search) => {
        this.setState({search});
    }


    render(){
        const quranStyle = { 
            width: '100%',
            // marginTop: 
        };
        
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <StatusBar style='dark' />
                <SafeAreaView style={{ width: '100%' }}>
                    <Text style={styles.title}>Qur'an</Text>
                    <ScrollView>
                        <ChapterList navigation={this.props} />
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 7,
        marginTop: 5
    }
});

export default QuranScreen;