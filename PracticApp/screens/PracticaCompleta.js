import React, { useEffect, useState } from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  } from 'react-native'
import moment from 'moment'
import 'moment/locale/es'
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from '../firebaseConfig';
import { doc, collection, addDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import UserId from "../hooks/UserId"
import ActionButton from 'react-native-action-button';
import Observe from '../hooks/observer'; 
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PracticaPreview from '../components/practicaPreview';
import FeedAlumnos from './FeedAlumnos';
import EditarPractica from './EditarPractica';
import VerAplicantesPractica from './VerAplicantesPractica';

const PracticaCompleta = ({ route }) => {
  const { id, Titulo, Desc, Requisitos, Vacantes, Contacto, Horario, Paga, Ubi, Fecha, Imagen, Aplicantes } = route.params
  const [imageUrl, setImageUrl] = useState(null);

  const rol = Observe();

  const { navigate } = useNavigation()

  const uid = UserId();
  console.log("qqqqqq: " + uid);

  useEffect(() => {
    if (Imagen != "") {
      const pathRef = ref(storage, `images/${Imagen}`);
      getDownloadURL(pathRef)
        .then(url => setImageUrl(url))
        .catch(error => console.error("Error fetching imagen: ", error)); 
    }
  }, [Imagen]);

  // fetch imagen del firebase storage


  //Lo que hace el boton de aplicar practicA
  const childrenCollectionRef = collection(
    db,
    "Campus",
    "Hermosillo",
    "Facultades",
    "Ingeniería",
    "Ingeniería en Sistemas",
    "Practicas",
    "Children",
  );
  const onPress = () => {
    updateDoc(doc(childrenCollectionRef, id), {Aplicantes: Aplicantes.concat(uid)});
    Alert.alert("Has aplicado a esta oferta. En caso de ser elegido, se te notificara");
  };
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View key={id} style={styles.container}>
          <Text style={styles.titulo}>{Titulo}</Text>
          <Text style={styles.subtitulo}>Descripción</Text>
          <Text style={styles.texto}>{Desc}</Text>
          <Text style={styles.subtitulo}>Requisitos</Text>
          <Text style={styles.texto}>{Requisitos}</Text>
          <Text style={styles.subtitulo}>Número de Vacantes</Text>
          <Text style={styles.texto}>Existen {Vacantes} vacantes para esta oferta.</Text>
          <Text style={styles.subtitulo}>Ubicación de la empresa</Text>
          <Text style={styles.texto}>{Ubi}</Text>
          <Text style={styles.subtitulo}>Horario</Text>
          <Text style={styles.texto}>{Horario}</Text>
          <Text style={styles.subtitulo}>Apoyo Económico</Text>
          <Text style={styles.texto}>{Paga}</Text>
          <Text style={styles.subtitulo}>Fecha de Expiración</Text>
          <Text style={styles.texto}>{Fecha}</Text>
          <Text style={styles.subtitulo}>Categorias de esta Oferta</Text>
          <Text style={styles.texto}>Desarrollo Web</Text>
          {Imagen && imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />}
          <TouchableOpacity style={styles.boton} onPress={onPress}>
            <Text style={styles.textoBoton}>Aplicar a esta oferta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {(rol == '2') ?
      <ActionButton buttonColor='#EAA627'>
        <ActionButton.Item onPress={() => navigate(VerAplicantesPractica)}>
          <Feather name={"eye"} style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item onPress={() => navigate(EditarPractica)}>
          <Feather name={"edit"} style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
      : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: '#013396',
    marginTop: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#36AF46',
    padding: 12,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white'
  },
  actionButtonIcon: {
    fontSize: 25,
    height: 25,
    color: 'white',
  },
})

export default PracticaCompleta