import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Alert } from "react-native";

export async function postPractica(formValues, navigation) {

  try {
    const childrenCollectionRef = collection(
      db,
      "Campus",
      "Hermosillo",
      "Facultades",
      "Ingeniería",
      "Ingeniería en Sistemas",
      "Practicas",
      "Children"
    );

    const docRef = await addDoc(childrenCollectionRef, {
      Titulo: formValues.title,
      Desc: formValues.desc,
      Requisitos: formValues.reqs,
      Ubi: formValues.ubi,
      Horario: formValues.horario,
      Paga: formValues.paga,
      Vacantes: formValues.vacantes,
      Contacto: formValues.contacto,
    });

    Alert.alert('Listo', 'Se publicó la practica', [
      {text: 'Aceptar', onPress: () => navigation.navigate("FeedAlumnos")}
    ])
    console.log("Document written with ID: ", docRef.id);

  } catch (error) {
    console.error("Error writing document: ", error);
    throw error;
  }
}
