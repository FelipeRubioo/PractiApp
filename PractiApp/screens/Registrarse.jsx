import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Registrarse = (props) => {
  // Estados para los valores de los campos del formulario
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [campus, setCampus] = useState('');
  const [career, setCareer] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    console.log('Formulario enviado:', { email, name, lastName, campus, career, password, confirmPassword });
  };

  // Ir al Login
  const Login = () => {
    props.navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo institucional"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre(s)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido(s)"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Campus"
        value={campus}
        onChangeText={setCampus}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={career}
        onChangeText={setCareer}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <View style={styles.contText}>
        <Text style={styles.Text1}>¿Ya tienes cuenta?</Text>
        <TouchableOpacity onPress={Login}>
          <Text style={styles.Text2}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  contText:{
    flexDirection: 'row', // Establece la dirección del contenedor como fila
    alignItems: 'center', // Alinea los elementos verticalmente en el centro
    justifyContent: 'center',
  },
  Text1:{
    fontSize: 16,
    marginHorizontal: 3,
  },
  Text2:{
    fontSize:16,
    color:'orange'
  }
});

export default Registrarse;
