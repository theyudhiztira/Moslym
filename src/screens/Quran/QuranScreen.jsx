import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChapterCard from './components/ChapterCard';
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
                    <ChapterList />
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