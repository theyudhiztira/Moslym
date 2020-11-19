import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import ChapterCard from './ChapterCard';

const apiUrl = 'http://api.quran.com/api/v3/';

class ChapterList extends Component {
    constructor(props){
        super(props)
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

    componentDidMount = () => {
        this.loadChaptersData();
    }

    renderChapters = () => {
        const chapters = Object.values(this.state.chapters);
        let chapterData = [];
        
        chapters.map(v => {
            return chapterData.push(<ChapterCard data={v} />);
        })

        const notFoundMessage = <Text>Not found.</Text>;
        
        return chapterData.length < 1 ? notFoundMessage : chapterData;
    }

    render() { 
        return (
            <View>
                {
                    !this.state.isLoading ? this.renderChapters() : <ActivityIndicator />
                }
            </View>
        );
    }
}

export default ChapterList;