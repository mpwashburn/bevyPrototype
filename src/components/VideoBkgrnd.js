import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import Train from '../assets/videos/train.mp4';

export default class VideoBkgrnd extends Component {
  state = {  }
  render() {
    const {container, backgroundVideo} = styles;
    return (
      <View style={container}>  
        <Video
          repeat
          source={Train}
          ref={(ref) => {this.player = ref}}
          onBuffer={this.onBuffer}
          onEnd={this.onEnd}
          onError={this.videoError}
          style={backgroundVideo}
        />
      </View>
    );
  }
}

const styles = {
  container:{
    flex:1,
    justifyContent:'center',
  },
  backgroundVideo:{
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0
  }
};