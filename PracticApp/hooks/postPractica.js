import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function postPractica(formValues) {
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

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error writing document: ", error);
    throw error;
  }
}
