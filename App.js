import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Screen/Register';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>form</Text>
      <StatusBar style="auto" />
      <Register />
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
