import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuranCard from './components/QuranCard';

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
                <SafeAreaView style={{ width: '100%' }}>
                    <Text style={styles.title}>Quran</Text>
                    <SearchBar
                        placeholder='Search'
                        onChangeText={this.updateSearch}
                        round={true}
                        value={this.state.search}
                        showCancel={true}
                        platform='ios'
                        lightTheme='default'
                        containerStyle={{ 
                            backgroundColor: 'transparent',
                            border: 'none'
                        }}
                    />
                    <QuranCard data="Indonesia Raya" />
                    <StatusBar style='dark' />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '600',
        fontSize: 23,
        textAlign: 'center'
    }
});

export default QuranScreen;