import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 15

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colourToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  if (state[action.colourToChange] + action.amount >255 || state[action.colourToChange] + action.amount < 0) {
    return state;
  }

  switch(action.colourToChange) {
    case "red":
      return { ...state, red: state.red + action.amount }
    case "green":
      return { ...state, green: state.green + action.amount }
    case "blue":
      return { ...state, blue: state.blue + action.amount }
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0});
  const { red, green, blue } = state;

  return <View>
    <ColourCounter
      onIncrease={() => dispatch({colourToChange: 'red', amount: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({colourToChange: 'red', amount: -1 * COLOUR_INCREMENT})}
      colour="Red"
    />
    <ColourCounter
      onIncrease={() => dispatch({colourToChange: 'green', amount: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({colourToChange: 'green', amount: -1 * COLOUR_INCREMENT})}
      colour="Green"
    />
    <ColourCounter
      onIncrease={() => dispatch({colourToChange: 'blue', amount: COLOUR_INCREMENT})}
      onDecrease={() => dispatch({colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT})}
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
