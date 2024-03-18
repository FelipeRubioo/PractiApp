import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export default function Observe() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      console.log("user id:", uid);

      const docRef = doc(db, "Usuarios", uid);
      const docSnap = await getDoc(docRef);
      const userData = docSnap.data();
      console.log("Rol de usuario: ",userData.rol);

      // i want to read the data from Usuarios/uid uid being the one i declared in the const above
      
    } else {
      console.log("no hay nadie logeado");
    }
  });
}
