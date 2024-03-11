import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import 'moment/locale/es'

const PracticaCompleta = ({ route }) => {
  const { id, Titulo, Desc, Requisitos, Vacantes, Contacto, Fecha } = route.params
  //Formato de la fecha
  try{
    var t = new Date(
      Fecha.seconds * 1000 + Fecha.nanoseconds / 1000000
    );
  } catch(error){
    console.error(error)
  }
  return (
    <View key={id}>
      <Text>Titulo: {Titulo}</Text>
      <Text>Desc: {Desc}</Text>
      <Text>Requisitos: {Requisitos}</Text>
      <Text>Vacantes: {Vacantes}</Text>
      <Text>Contacto: {Contacto}</Text>
      <Text>Fecha: {moment(t).format('LL')}</Text>
    </View>
  )
}

export default PracticaCompleta