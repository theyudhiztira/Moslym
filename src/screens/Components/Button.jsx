import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

class MoslymButton extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={
                {
                    width: this.props.width,
                    backgroundColor: this.props.bgColor,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 6,
                    marginTop: 20,
                    marginLeft: 6,
                }
            }>
                <Text style={{
                    textAlign: 'center', 
                    color: this.props.textColor,
                    fontWeight: '600'
                }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }

}

MoslymButton.defaultProps = {
    width: 100,
    bgColor: '#0EA17E',
    textColor: '#ffffff'
}

export default MoslymButton;