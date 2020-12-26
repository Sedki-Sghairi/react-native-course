import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  [text, setText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title='change text' onPress={() => setText('mrigel!')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
