import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state = { counter: 0 }
  // action = { type: increaseCounter || decreaseCounter, payload: number }
  switch(action.type) {
    case "increaseCounter":
      return { ...state, counter: state.counter + action.payload };
    case "decreaseCounter":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
}

const CounterScreen = ({title, imageSource, score}) => {
  const [ state, dispatch ] = useReducer(reducer, { counter: 0 });
  const {counter} = state;

  return (
    <View>
      <Button title="Increase" onPress={() => {
        dispatch({ type: "increaseCounter", payload: 1 })
      }}/>
      <Button title="Decrease" onPress={() => {
        dispatch({ type: "decreaseCounter", payload: -1 })
      }}/>
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default CounterScreen;
