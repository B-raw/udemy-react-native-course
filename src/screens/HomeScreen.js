import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello world people!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
        color="green"
        style={styles.button}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
        style={styles.button}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => { navigation.navigate("Image")}}
        style={styles.button}
      />
      <Button
        title="Go to Counter demo"
        onPress={() => { navigation.navigate("Counter")}}
        style={styles.button}
      />
      <Button
        title="Go to Colour demo"
        onPress={() => { navigation.navigate("Colour")}}
        style={styles.button}
      />
      <Button
        title="Go to Square demo"
        onPress={() => { navigation.navigate("Square")}}
        style={styles.button}
      />
      <Button
        title="Go to TextScreen demo"
        onPress={() => { navigation.navigate("Text")}}
        style={styles.button}
      />
      <Button
        title="Go to Box demo"
        onPress={() => { navigation.navigate("Box")}}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    margin: 20
  }
});

export default HomeScreen;
