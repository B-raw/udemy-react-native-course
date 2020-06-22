import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {
  const [ red, setRed ] = useState(0);
  const [ green, setGreen ] = useState(0);
  const [ blue, setBlue ] = useState(0);
  const COLOUR_INCREMENT = 15

  console.log([red, blue, green]);

  const setColour = (colour, change) => {
    // colour === "red", "green", "blue"
    // change === +15 or -15
    if (colour + change >=255 || colour + change <= 0 ) {
      return;
    }
    switch(colour) {
      case "red":
        setRed(red+change)
        break;
      case "green":
        setGreen(green+change)
        break;
      case "blue":
        setBlue(blue+change)
        break;
    }
  }

  return <View>
    <ColourCounter
      onIncrease={() => {setColour('red', COLOUR_INCREMENT)}}
      onDecrease={() => {setColour('red', -1*COLOUR_INCREMENT)}}
      colour="Red"
    />
    <ColourCounter
      onIncrease={() => {setColour('green', COLOUR_INCREMENT)}}
      onDecrease={() => {setColour('green', -1*COLOUR_INCREMENT)}}
      colour="Green"
    />
    <ColourCounter
      onIncrease={() => {setColour('blue', COLOUR_INCREMENT)}}
      onDecrease={() => {setColour('blue', -1*COLOUR_INCREMENT)}}
      colour="Blue"
    />
    <View style={{
      width:150,
      height:150,
      backgroundColor:`rgb(${red}, ${green}, ${blue})`
    }}/>
  </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;
