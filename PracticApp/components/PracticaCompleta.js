import React from 'react'
import { View, Text } from 'react-native'

const PracticaCompleta = ({ route }) => {
  const { id, Titulo, Desc, Requisitos, Vacantes, Contacto, Horario, Paga, Ubi } = route.params
  return (
    <View key={id}>
      <Text>Titulo: {Titulo}</Text>
      <Text>Desc: {Desc}</Text>
      <Text>Horario: {Horario}</Text>
      <Text>Ubicación: {Ubi}</Text>
      <Text>Requisitos: {Requisitos}</Text>
      <Text>Paga: {Paga}</Text>
      <Text>Vacantes: {Vacantes}</Text>
      <Text>Contacto: {Contacto}</Text>
    </View>
  )
}

export default PracticaCompleta