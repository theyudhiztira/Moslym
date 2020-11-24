import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// Button Component. Required props: bgColor, buttonIcon, textColor, width
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
                    borderRadius: 20,
                    marginTop: 20,
                    marginLeft: 6,
                }
            }>
            <View style={{
                    flex:1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Feather name={this.props.btnIcon} size={20} color={this.props.textColor} />
                <Text style={{
                    textAlign: 'center', 
                    color: this.props.textColor,
                    fontWeight: '600',
                    marginLeft: 5
                }}>
                    {this.props.text}
                </Text>
            </View>
                
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