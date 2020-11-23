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

    loadChaptersData = () => {
        Axios.get(`${apiUrl}/chapters?language=id`)
        .then(res => {
            this.setState({
                chapters: res.data.chapters,
                isLoading: false
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    openChapter = (chapterId) => {
        const { navigation } = this.props.navigation;
        return navigation.navigate('Home')
    }

    componentDidMount = () => {
        this.loadChaptersData();
    }

    renderChapters = () => {
        const chapters = Object.values(this.state.chapters);
        let chapterData = [];
        
        chapters.map(v => {
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