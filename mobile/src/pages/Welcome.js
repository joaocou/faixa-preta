import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';

import TimedSlideshow from 'react-native-timed-slideshow';


export default class Welcome extends Component {

  state = {
    items: [
			{
				uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
				title: "Michael Malik",
				text: "Minnesota, USA",
			},
			{
				uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
				title: "Victor Fallon",
				text: "Val di Sole, Italy"
			},
			{
				uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
				title: "Mary Gomes",
				text: "Alps"
			}
		]
  }

  componentDidMount(){
    
  }

  render(){

    return (
      <View></View>
  );
  }
}