import React, { Component } from 'react';
import {View, Text} from 'react-native';

class VerseHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (<View style={{ 
            paddingHorizontal: 15,
            paddingVertical: 5,
            flexDirection: 'row',
            borderBottomColor: '#4CCD7A',
            borderBottomWidth: 1,
            backgroundColor: '#4CCD7A'
        }}>
            <Text style={{  
                flex: 1,
                textAlign: 'left',
                color: '#FFF',
                fontWeight: '600'
            }}>{ this.props.chapterData.chapter_number }. {this.props.chapterData.name_complex}</Text>
            <Text style={{  
                flex: 1,
                textAlign: 'right',
                color: '#FFF',
                fontWeight: '600'
            }}>{ (this.props.chapterData.revelation_place).charAt(0).toUpperCase() + (this.props.chapterData.revelation_place).slice(1) }</Text>
        </View>);
    }
}

export default VerseHeader;