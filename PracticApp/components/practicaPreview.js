import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

//Datos falso que sera remplazado por los del firebase


const colors = ['rgba(234, 166, 39, .3)', 'rgba(1, 51, 150, .2)']
//genera cada post de las practicas
const PracticaPreview = (props) => {
  // eslint-disable-next-line react/prop-types
  const { index, fecha, titulo, categoria } = props
  const onPress = () => console.log('Hola')
  return(
    <TouchableOpacity style={[styles.item, {backgroundColor: colors[index % colors.length]}]} onPress={onPress}>
      <Text style={styles.fecha}>{fecha}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.categoria}>Categorias: {categoria}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(234, 166, 39, .5)',
    padding: 10,
    marginVertical: 8,
  },
  fecha: {
    fontSize: 12,
    textAlign: 'right',
    marginBottom: 30,
    color: 'rgba(0, 0, 0, .6)'
  },
  titulo: {
    fontSize: 32,
  },
  categoria: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, .6)'
  }
})

export default PracticaPreview
