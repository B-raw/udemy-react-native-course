import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 15

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'colourToChange', payload:  { colour: "red" || "blue", amount: 15 || -15 }}

  if (state[action.payload.colour] + action.payload.amount >255 || state[action.payload.colour] + action.payload.amount < 0) {
    return state;
  }

  switch(action.type) {
    case "changeRed":
      return { ...state, red: state.red + action.payload.amount }
    case "changeGreen":
      return { ...state, green: state.green + action.payload.amount }
    case "changeBlue":
      return { ...state, blue: state.blue + action.payload.amount }
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0});
  const { red, green, blue } = state;

  return <View>
    <ColourCounter
      onIncrease={() => dispatch({type: 'changeRed', payload: { amount: COLOUR_INCREMENT, colour: 'red' } })}
      onDecrease={() => dispatch({type: 'changeRed', payload: { amount: -1 * COLOUR_INCREMENT, colour:  'red '}})}
      colour="Red"
    />
    <ColourCounter
      onIncrease={() => dispatch({type: 'changeGreen', payload: { amount: COLOUR_INCREMENT, colour: 'green' }})}
      onDecrease={() => dispatch({type: 'changeGreen', payload: { amount: COLOUR_INCREMENT, colour: 'green' }})}
      colour="Green"
    />
    <ColourCounter
      onIncrease={() => dispatch({type: 'changeBlue', payload: { amount: COLOUR_INCREMENT, colour: 'blue' }})}
      onDecrease={() => dispatch({type: 'changeBlue', payload: { amount: COLOUR_INCREMENT, colour: 'blue' }})}
      colour="Blue"/>
    <View style={{
      width:150,
      height:150,
      backgroundColor:`rgb(${red}, ${green}, ${blue})`
    }}/>
  </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;
