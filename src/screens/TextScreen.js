import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('')

  return (
    <View>
      <View style={styles.view}>
        <Text>Enter Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(newValue) => setName(newValue) }
        />
        <Text>Your name is {name || "_________" }</Text>
      </View>
      <View style={styles.view}>
        <Text>Enter Password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue) }
        />
        <Text>{password.length < 5 ? "Password must be longer than 5 characters" : "" }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  view: {
    margin: 3,
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
