import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

export default class post extends Component {
    
    state = {
        p_image : null
    }
    openImage(){
        ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        this.setState({p_image:image})
      });
    }
    
    render() {
        return (
            <View>
                <Text onPress ={this.openImage} > Upload Gambar from Camera </Text>
            </View>
        )
    }
}
