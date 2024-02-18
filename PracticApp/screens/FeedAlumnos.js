import React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native'
import PracticaPreview from '../components/practicaPreview';

const DATA = [
  {
    id: '1',
    fecha: '12 de febrero de 2024',
    titulo: 'Practicas en Encora',
    categoria: 'Desarrollo web'
  },
  {
    id: '2',
    fecha: '10 de febrero de 2024',
    titulo: 'Practicas en Ford',
    categoria: 'Redes'
  },
  {
    id: '3',
    fecha: '10 de febrero de 2024',
    titulo: 'Practicas en Ford',
    categoria: 'Redes'
  },
  {
    id: '4',
    fecha: '10 de febrero de 2024',
    titulo: 'Practicas en Ford',
    categoria: 'Redes'
  }
];


//el feed con los post
const FeedAlumnos = () => {
  //renderizamos la lista de practicas
  const renderItem = ({ item, index }) => (
    //El formato esta en otro archivo llamado practicaPreview
    <PracticaPreview
      index={index}
      titulo={item.titulo}
      categoria={item.categoria}
      fecha={item.fecha}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 20}}>Vacantes disponibles</Text>
      </View>
      {
        //EL flatlist ira generando 'PracticasPreview' que haya en la base 
      }
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 16,
    backgroundColor: 'white'
  },
});

export default FeedAlumnos;
