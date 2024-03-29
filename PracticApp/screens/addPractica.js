import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { postPractica } from "../hooks/postPractica";
import { useNavigation } from "@react-navigation/native";

// img picker

import * as ImagePicker from "expo-image-picker";

const AddPractica = () => {
  const navigation = useNavigation();

  // Estados para los valores de los campos del formulario
  // falta imagen

  const [formValues, setFormValues] = useState({
    title: "",
    desc: "",
    reqs: "",
    ubi: "",
    horario: "",
    paga: "",
    vacantes: "",
    contacto: "",
    campus: "",
    facultad: "",
    carrera: "",
  });

  const handleChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSubmit = () => {
    postPractica(formValues, navigation);
  };

  const handleImagePick = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permiso denegado",
        "Por favor, activa el permiso para acceder a tus fotos."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.cancelled) {
      setFormValues({ ...formValues, image: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{paddingVertical:10}}>
        <Text style={{fontSize: 24, fontWeight:700, paddingBottom:16}}>Crear oferta de práctica</Text>
        <Text style={{fontSize: 16, fontWeight:700, paddingBottom:16, color:"rgb(1 51 150)"}}>Paso 2. Llena el formulario.</Text>
        <Text style={{fontSize: 16, fontWeight:400, fontStyle:"italic", paddingBottom:8, paddingTop:14, color:"rgb(255 94 109)"}}>La oferta expirará después de un mes de su publicación.</Text>
      </View>

      <TextInput
        style={styles.input}
        label="Título"
        placeholder="Título"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.title}
        onChangeText={(text) => handleChange("title", text)}
      />
      <TextInput
        style={styles.input}
        label="Descripción"
        placeholder="Descripción de la oferta"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.desc}
        onChangeText={(text) => handleChange("desc", text)}
      />
      <TextInput
        style={styles.input}
        label="Requisitos"
        placeholder="Requisitos"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.reqs}
        onChangeText={(text) => handleChange("reqs", text)}
      />
      <TextInput
        style={styles.input}
        label="Vacantes"
        placeholder="Número de vacantes disponibles"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.vacantes}
        onChangeText={(text) => handleChange("vacantes", text)}
        keyboardType="numeric" // Use numeric keyboard for numerical input
      />
      <TextInput
        style={styles.input}
        label="Ubicación"
        placeholder="Ubicación de la empresa"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.ubi}
        onChangeText={(text) => handleChange("ubi", text)}
      />
      <TextInput
        style={styles.input}
        label="Horario"
        placeholder="Horario"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.horario}
        onChangeText={(text) => handleChange("horario", text)}
      />
      <TextInput
        style={styles.input}
        label="Salario"
        placeholder="Salario"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.paga}
        onChangeText={(text) => handleChange("paga", text)}
      />

      <TextInput
        style={styles.input}
        label="Contacto"
        placeholder="Contacto"
        placeholderTextColor="rgb(170 170 170)"
        value={formValues.contacto}
        onChangeText={(text) => handleChange("contacto", text)}
      />

      <TouchableOpacity style={styles.button2} onPress={handleImagePick}>
        <Text style={styles.buttonText2}>+ Adjuntar imagen</Text>
      </TouchableOpacity>

      {formValues.image && (
        <Image source={{ uri: formValues.image }} style={styles.image} />
      )}

      <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
        <Text style={styles.buttonText1}>Subir Oferta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 26,
  },
  button1: {
    backgroundColor: "rgb(55 175 70)",
    paddingVertical: 10,
    marginBottom: 12,
    borderRadius: 7,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "rgba(55 175 70 0.1)",
    paddingVertical: 10,
    marginBottom: 12,
    borderRadius: 7,
    alignItems: "center",
  },
  buttonText1: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  buttonText2: {
    color: "rgb(234 166 38)",
    fontSize: 18,
  },
  input: {
    height: 40,
    fontSize: 21,
    borderColor: "rgb(193 199 208)",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  textStyle:{
    fontSize: 24
  }
});

export default AddPractica;
