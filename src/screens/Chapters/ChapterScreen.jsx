import React, { Component } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, timing } from 'react-native-reanimated';
import VerseCard from './components/VerseCard';
import PlayerPanel from './components/PlayerPanel';
import VerseHeader from './components/VerseHeader';
import { Audio } from 'expo-av';

class ChapterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chapterData: {},
            verseData: {},
            isLoading: true,
            isScrolling: false,
            metaData: {},
            fadeAnim: new Animated.Value(95),
            currentIndex: 0
        }
    }

    componentDidMount = async () => {
        await this.setState({
            chapterData: this.props.route.params.chapterData
        });
        await this.props.navigation.setOptions({
            title: this.props.route.params.chapterData.name_complex
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

    _fetchLocalData = async () => {
        const chapterData = require('../../../assets/data/verseData.json');
        let dataToSupply = [];
        const data = chapterData[(this.state.chapterData.id) - 1];
        
        if(data.bismillah_pre){
            dataToSupply = [...dataToSupply,{
                chapter_id: this.state.chapterData.id,
                text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                verse_number: '0',
                translation_indonesian: 'Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.',
                translation_english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
            }];
        }

        (Object.values(data.verses)).map(verse => {
            if(verse){
                dataToSupply = [...dataToSupply, verse];
            }
        });

        await this.setState({
            verseData: dataToSupply,
            isLoading: false
        });
    }

    renderVerseCard = () => {
        return <FlatList 
            contentContainerStyle={Style.listStyle}
            data={this.state.verseData}
            ref={(ref) => {this.flatListRef = ref}}
            keyExtractor={data => data.verse_number.toString()}
            renderItem={({ item }) => (
                <VerseCard data={item} />
            )}
            onEndReached={() => {
                if (!this.onEndReachedCalledDuringMomentum) {
                    this.onEndReachedCalledDuringMomentum = true;
                }
            }}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={(e) => { 
                this.onEndReachedCalledDuringMomentum = false; 
                this.setState({
                    isScrolling: true
                })
                this._hidePlayer()
            }}
            onMomentumScrollEnd={(e) => {
                this.setState({
                    isScrolling: false
                })
                this._showPlayer()
            }}
            ListHeaderComponent={this.renderHeader}
        />
    }

    _hidePlayer = () => {
        return timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 350,
            easing: Easing.inOut(Easing.ease)
        }).start();
    }

    _showPlayer = () => {
        return timing(this.state.fadeAnim, {
            toValue: 95,
            duration: 575,
            easing: Easing.inOut(Easing.ease),
        }).start();
    }

    renderPlayer = () => {
        return <PlayerPanel 
            fadeAnim={this.state.fadeAnim}
            chapterData={this.state.chapterData}
            forwardTap={this._forwardTap}
            backwardTap={this._backwardTap}
            currentIndex={this.state.currentIndex} 
            playTap={this._playTap}
        />;
    }

    renderHeader = () => {
        return <VerseHeader chapterData={this.state.chapterData} />
    }

    _playTap = async () => {
        // const soundObject = new Audio.Sound();

        // await soundObject.loadAsync({
        //     uri: 'http://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/7/low'
        // })
        // soundObject.playAsync();
        // soundObject.unloadAsync();
        // try {
        //     console.log("Jalan");
        //     await soundObject.loadAsync(require('../../../assets/low.mp3'));
        //     await soundObject.playAsync();
        //     console.log(soundObject);
        //     // Your sound is playing!

        //     // Don't forget to unload the sound from memory
        //     // when you are done using the Sound object
        //     await soundObject.unloadAsync();
        // } catch (error) {
        //     // An error occurred!
        // }
    }

    _backwardTap = async () => {
        const newIndex = this.state.currentIndex == 0 ? 0 : this.state.currentIndex-1;

        await this.setState({
            currentIndex: newIndex
        })

        return this.flatListRef.scrollToIndex({
            animated: true,
            index: newIndex
        });
    }

    _forwardTap = async () => {
        const newIndex = this.state.currentIndex == this.state.chapterData.verses_count ? this.state.chapterData.verses_count : this.state.currentIndex+1;

        await this.setState({
            currentIndex: newIndex
        })

        return this.flatListRef.scrollToIndex({
            animated: true,
            index: newIndex
        });
    }

    render() { 
        return (
            <View style={{ flex: 1, height: '100%' }}>
                { this.renderPlayer() }
                { !this.state.isLoading && this.renderVerseCard() }
            </View>
        );
    }
}

const Style = StyleSheet.create({
    listStyle: {
        paddingBottom: 75
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