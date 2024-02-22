import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { postPractica } from "../hooks/postPractica";

const addPractica = () => {
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
      <FormInput
        label="Título"
        placeholder="Título"
        value={formValues.title}
        onChangeText={(text) => handleChange("title", text)}
      />
      <FormInput
        label="Descripción"
        placeholder="Descripción"
        value={formValues.desc}
        onChangeText={(text) => handleChange("desc", text)}
      />
      <FormInput
        label="Requisitos"
        placeholder="Requisitos"
        value={formValues.reqs}
        onChangeText={(text) => handleChange("reqs", text)}
      />
      <FormInput
        label="Ubicación"
        placeholder="Ubicación"
        value={formValues.ubi}
        onChangeText={(text) => handleChange("ubi", text)}
      />
      <FormInput
        label="Horario"
        placeholder="Horario"
        value={formValues.horario}
        onChangeText={(text) => handleChange("horario", text)}
      />
      <FormInput
        label="Salario"
        placeholder="Salario"
        value={formValues.paga}
        onChangeText={(text) => handleChange("paga", text)}
      />
      <FormInput
        label="Vacantes"
        placeholder="Vacantes"
        value={formValues.vacantes}
        onChangeText={(text) => handleChange("vacantes", text)}
        keyboardType="numeric" // Use numeric keyboard for numerical input
      />
      <FormInput
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
