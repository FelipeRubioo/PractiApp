import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native'
import { Feather } from "@expo/vector-icons";

const SolicitudAplicante = (props) => {

  const [botones, setBotones] = useState(false);

  const onPress = () => {
    if(botones == false && props.name != ''){
      setBotones(true)
    } else if (botones == true){
      setBotones(false)
    }
  }

  return(
    <View style={styles.contenedorAlumno}>
      <TouchableOpacity onPress={onPress} style={styles.nombreContenedor}>
        <Text style={styles.nombre}>{props.name}</Text>
        {botones == false ?
          <Feather name={"chevron-down"} size={16} />
        : <Feather name={"chevron-up"} size={16} />}
      </TouchableOpacity>
      {botones == true ?
      <>
      <Text style={styles.descripcion}>Descripcion del perfil del aplicante</Text>
      <Text style={styles.descripcion}>Habilidades del perfil del aplicante</Text>
      <View style={styles.contenedorBotones}>
        <TouchableOpacity style={[styles.boton, {backgroundColor: '#FF3649'}]}>
          <Text style={{color: '#fff', fontSize:16}}>Rechazar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, {backgroundColor: '#36AF46'}]}>
          <Text style={{color: '#fff', fontSize:16}}>Aprobar</Text>
        </TouchableOpacity>
      </View>
      </>
      : null}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorAlumno: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
  },
  nombre: {
    fontSize: 16,
  },
  contenedorBotones: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    height: 50,
  },
  boton: {
    color: '#fff',
    fontSize: 16,
    borderRadius: 5,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descripcion: {
    fontSize: 16,
    color: '#AAAAAA'
  },
  nombreContenedor: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default SolicitudAplicante;