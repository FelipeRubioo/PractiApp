import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import UserName from '../hooks/UserName';

const VerAplicantesPractica = ({ route }) => {
  const { aplicantes } = route.params

  const user = UserName("Lq4QMlEcYbXblWLCCVclVJ7IBZ92");
  console.log('skkks', user);
  console.log('Aplicantes: ', aplicantes);

  const nombre = [];
  aplicantes.forEach(alumno => {
    nombre.push(UserName(alumno))
  });

  const renderItem = ({ item, index }) => (
    <Text>{item}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Ver Aplicantes en la practica</Text>
        <FlatList
          data={nombre}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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