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

    componentDidMount = () => {
        this.setState({
            chapterData: this.props.route.params.chapterData
        });
        this.props.navigation.setOptions({
            title: this.props.route.params.chapterData.name_simple
        });
        this._fetchFirstPageData();
    }

    componentWillUnmount = () => {
        this.setState({ 
            chapterData: {},
            verseData: {},
            isLoading: true,
            isLoadingMoreData: false,
            metaData: {},
            reachedEndOfChapter: false
        });
        const CancelToken = Axios.CancelToken;
        cance
    }

    _fetchFirstPageData = () => {
        Axios.get(`http://api.quran.com/api/v3/chapters/${this.props.route.params.chapterId}/verses?recitation=7&translations=33&language=id&limit=25&text_type=words`)
        .then(res => {
            let dataToSupply = [];
            const data = res.data;
            if(this.props.route.params.chapterData.bismillah_pre){
                dataToSupply = [...dataToSupply,{
                    id: 1,
                    text_madani: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    verse_number: '0',
                    translations: [{
                        text: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang'
                    }]
                }];
            }

            data.verses.map(verse => {
                if(verse){
                    dataToSupply = [...dataToSupply, verse];
                }
            });

            return this.setState({
                isLoading: false,
                verseData: dataToSupply,
                metaData: data.meta
            });
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderVerseCard = () => {
        return <FlatList 
            contentContainerStyle={Style.listStyle}
            data={this.state.verseData}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
                <VerseCard data={item} />
            )}
            onEndReached={() => {
                if (!this.onEndReachedCalledDuringMomentum) {
                    this._loadMoreData();
                    this.onEndReachedCalledDuringMomentum = true;
                }
            }}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
            ListFooterComponent={this.renderFooter}
        />
    }

    _loadMoreData = () => {
        this.setState({
            isLoadingMoreData: true
        });

        const metaData = this.state.metaData;
        if(!this.state.isLoadingMoreData && metaData.next_page != null && this.state.reachedEndOfChapter){
            return Axios.get(`http://api.quran.com/api/v3/chapters/${this.props.route.params.chapterId}/verses?recitation=7&translations=33&language=id&limit=25&text_type=words&page=${this.state.metaData.next_page}`)
            .then(res => {
                let dataToSupply = this.state.verseData;
                const data = res.data;

                data.verses.map(verse => {
                    if(verse){
                        dataToSupply = [...dataToSupply, verse];
                    }
                });

                return this.setState({
                    isLoadingMoreData: false,
                    verseData: dataToSupply,
                    metaData: data.meta
                });
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            return this.setState({
                isLoadingMoreData: false,
                reachedEndOfChapter: true
            })
        }
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