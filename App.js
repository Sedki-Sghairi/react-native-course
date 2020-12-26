import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={{padding:70}}>
      <View>
        <TextInput style={{placeholder: 'course goal'}}/>
        <Button title='Add' />
      </View>
      <View>

      </View>
    </View>
  );
}

