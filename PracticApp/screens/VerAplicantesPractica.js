import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const VerAplicantesPractica = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Ver Aplicantes en la practica</Text>
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

export default VerAplicantesPractica;