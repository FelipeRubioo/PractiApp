import React from 'react'
import { View, Text } from 'react-native'

const PracticaCompleta = ({ route }) => {
  const { id, Titulo, Desc, Requisitos, Vacantes, Contacto } = route.params
  return (
    <View key={id}>
      <Text>Titulo: {Titulo}</Text>
      <Text>Desc: {Desc}</Text>
      <Text>Requisitos: {Requisitos}</Text>
      <Text>Vacantes: {Vacantes}</Text>
      <Text>Contacto: {Contacto}</Text>
    </View>
  )
}

export default PracticaCompleta