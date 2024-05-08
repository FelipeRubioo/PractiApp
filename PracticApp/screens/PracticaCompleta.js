import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import moment from 'moment'
import 'moment/locale/es'
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from '../firebaseConfig';

const PracticaCompleta = ({ route }) => {
  const { id, Titulo, Desc, Requisitos, Vacantes, Contacto, Horario, Paga, Ubi, Fecha, Imagen } = route.params
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (Imagen != "") {
      const pathRef = ref(storage, `images/${Imagen}`);
      getDownloadURL(pathRef)
        .then(url => setImageUrl(url))
        .catch(error => console.error("Error fetching imagen: ", error)); 
    }
  }, [Imagen]);

  // fetch imagen del firebase storage
  
  
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
      <Text>Fecha: {Fecha}</Text>
      {Imagen && imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />}
    </View>
  )
}

export default PracticaCompleta