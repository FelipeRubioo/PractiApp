import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    Alert.alert('Usuario creado')
    navigation.navigate("Feed");
  } catch (error) {
    throw error;
  }
};
