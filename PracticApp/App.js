import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './components/test';
import FeedAlumnos from './screens/FeedAlumnos';
import Tabs from './components/Tabs'

export default function App() {

  return (
    /* <View style={styles.container}>
      <Text>Practicas Unison</Text>
      <Test />
      <StatusBar style="auto" />
    </View> */
    <Tabs />
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
