import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const EditarPractica = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>EditarPractica</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default EditarPractica;