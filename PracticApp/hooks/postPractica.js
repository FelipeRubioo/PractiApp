import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function postPractica(formValues) {
  try {
    const ref = doc(
      db,
      "Campus",
      formValues.campus,
      "Facultades",
      formValues.facultad,
      formValues.carrera,
      "Practicas",
      "Children"
    );

    await setDoc(ref, {
      title: formValues.title,
      desc: formValues.desc,
      reqs: formValues.reqs,
      ubi: formValues.ubi,
      horario: formValues.horario,
      paga: formValues.paga,
      vacantes: formValues.vacantes,
      contacto: formValues.contacto,
    });
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
    throw error;
  }
}
