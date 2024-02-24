import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { postPractica } from "../hooks/postPractica";

const AddPractica = () => {
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
    postPractica(formValues);
  };
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Título"
        placeholder="Título"
        value={formValues.title}
        onChangeText={(text) => handleChange("title", text)}
      />
      <TextInput
        style={styles.input}
        label="Descripción"
        placeholder="Descripción"
        value={formValues.desc}
        onChangeText={(text) => handleChange("desc", text)}
      />
      <TextInput
        style={styles.input}
        label="Requisitos"
        placeholder="Requisitos"
        value={formValues.reqs}
        onChangeText={(text) => handleChange("reqs", text)}
      />
      <TextInput
        style={styles.input}
        label="Ubicación"
        placeholder="Ubicación"
        value={formValues.ubi}
        onChangeText={(text) => handleChange("ubi", text)}
      />
      <TextInput
        style={styles.input}
        label="Horario"
        placeholder="Horario"
        value={formValues.horario}
        onChangeText={(text) => handleChange("horario", text)}
      />
      <TextInput
        style={styles.input}
        label="Salario"
        placeholder="Salario"
        value={formValues.paga}
        onChangeText={(text) => handleChange("paga", text)}
      />
      <TextInput
        style={styles.input}
        label="Vacantes"
        placeholder="Vacantes"
        value={formValues.vacantes}
        onChangeText={(text) => handleChange("vacantes", text)}
        keyboardType="numeric" // Use numeric keyboard for numerical input
      />
      <TextInput
        style={styles.input}
        label="Contacto"
        placeholder="Contacto"
        value={formValues.contacto}
        onChangeText={(text) => handleChange("contacto", text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
});

export default AddPractica;
