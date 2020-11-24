import React, { Component } from 'react';
import { Text, ActivityIndicator, SafeAreaView } from 'react-native';
import Axios from 'axios';
import ChapterCard from './ChapterCard';;

const apiUrl = 'https://api.quran.com/api/v3/';
class ChapterList extends Component {
    constructor(props){
        super(props);
        this.state = {
            chapters: [],
            isLoading: true
        }
    }

    _loadChaptersData = async () => {
        const chapterData = require('../../../../assets/data/chapterData.json');
        await this.setState({
            chapters: chapterData,
            isLoading: false
        })
    }

    openChapter = (chapterId) => {
        const { navigation } = this.props.navigation;
        return navigation.navigate('Home')
    }

    componentDidMount = () => {
        this._loadChaptersData();
    }

    renderChapters = () => {
        let chapterData = [];

        (this.state.chapters).map(v => {
            return chapterData.push(<ChapterCard key={v.id} data={v} onPress={ () => {
                this.props.navigation.navigation.navigate('Chapter', {
                    chapterId: v.id,
                    chapterData: v
                });
            }} />);
        })

        const notFoundMessage = <Text>Not found.</Text>;
        
        return chapterData.length < 1 ? notFoundMessage : chapterData;
    }

    render() { 
        return (
            <SafeAreaView>
                    { !this.state.isLoading ? this.renderChapters() : <ActivityIndicator style={{ marginTop: '80%' }} /> }
            </SafeAreaView>
        );
    }
}

export default ChapterList;