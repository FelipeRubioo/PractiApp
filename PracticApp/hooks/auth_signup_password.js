import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import { db } from '../firebaseConfig';
import { doc, setDoc, collection  } from "firebase/firestore"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const createUser = async (email, password, name, lastName, campus, career) => {
  try {

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, 'Usuarios', userCredential.user.uid) , {
      email: email,
      name: name,
      lname: lastName,
      campus: campus,
      carrera: career,
      rol: '1'
    });


    Alert.alert('Usuario creado')
    navigation.navigate("Feed");
  } catch (error) {
    throw error;
  }
};
