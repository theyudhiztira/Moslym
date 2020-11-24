import React, { Component } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';
import VerseCard from './components/VerseCard';

class ChapterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chapterData: {},
            verseData: {},
            isLoading: true,
            isLoadingMoreData: false,
            metaData: {},
            reachedEndOfChapter: false
        }
    }

    componentDidMount = async () => {
        await this.setState({
            chapterData: this.props.route.params.chapterData
        });
        await this.props.navigation.setOptions({
            title: this.props.route.params.chapterData.name_simple
        });
        
        await this._fetchLocalData();
    }

    componentWillUnmount = () => {
        this.setState({ 
            chapterData: {},
            verseData: {},
            isLoading: true,
            reachedEndOfChapter: false
        });
    }

    _fetchLocalData = () => {
        const chapterData = require('../../../assets/data/verseData.json');
        let dataToSupply = [];
        const data = chapterData[this.state.chapterData.id];
        
        if(this.props.route.params.chapterData.bismillah_pre){
            dataToSupply = [...dataToSupply,{
                chapter_id: this.state.chapterData.id,
                text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                verse_number: '0',
                translation_indonesian: 'Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.',
                translation_english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
            }];
        }

        (Object.values(data)).map(verse => {
            if(verse){
                dataToSupply = [...dataToSupply, verse];
            }
        });

        this.setState({
            verseData: dataToSupply,
            isLoading: false
        });
    }

    renderVerseCard = () => {
        return <FlatList 
            contentContainerStyle={Style.listStyle}
            data={this.state.verseData}
            keyExtractor={data => data.verse_number.toString()}
            renderItem={({ item }) => (
                <VerseCard data={item} />
            )}
            onEndReached={() => {
                if (!this.onEndReachedCalledDuringMomentum) {
                    // this._loadMoreData();
                    this.onEndReachedCalledDuringMomentum = true;
                }
            }}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
            ListFooterComponent={this.renderFooter}
        />
    }
    
    renderFooter = () => {
        // if(!this.state.isLoadingMoreData) return null;

        return (
            <View
                style={{
                    position: 'relative',
                    width: 25,
                    height: 25,
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    marginTop: 10,
                    marginBottom: 10
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    render() { 
        return (
            <SafeAreaView style={{ height: '100%' }}>
                { this.state.isLoading ? <ActivityIndicator style={{ marginTop: '80%' }} /> : this.renderVerseCard() }
            </SafeAreaView>
        );
    }
}

const Style = StyleSheet.create({
    listStyle: {

    },
    basmallahContainer: {
        paddingVertical: 25,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1
    },
    basmallahArabic: {
        textAlign: 'right',
        fontSize: 25,
        fontWeight: '500',
        paddingHorizontal: 19,
        lineHeight: 55
    },
    basmallahLatin: {
        marginTop: 7,
        paddingLeft: 19,
        paddingRight: 19,
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'justify'
    }
})

export default ChapterScreen;