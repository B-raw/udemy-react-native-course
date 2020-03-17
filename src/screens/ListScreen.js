import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 23 },
    { name: 'Friend #2', age: 23 },
    { name: 'Friend #3', age: 90 },
    { name: 'Friend #4', age: 89 },
    { name: 'Friend #5', age: 78 },
    { name: 'Friend #6', age: 67 },
    { name: 'Friend #7', age: 56 },
    { name: 'Friend #8', age: 45 },
    { name: 'Friend #9', age: 34 }
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={style.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 40
  }
});

export default ListScreen;
