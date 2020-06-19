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
