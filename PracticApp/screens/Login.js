import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'

// CONEXION A BD
import { getAuth , signInWithEmailAndPassword} from 'firebase/auth'
import { app } from "../firebaseConfig.js"

const auth = getAuth(app)

export default function Login(props) {

    // creamos la variable de estado
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logueo = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Iniciando sesión', 'Accediendo...')
            // te lleva al feed
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    }

    const OlvidePassword = () => {
        props.navigation.navigate('OlvidePassword')
    }
    const Registrarse = () => {
        props.navigation.navigate('Registrarse')
    }


    return (
        <View style={styles.padre}>
            <View>
                <Text>Iniciar Sesión</Text>
            </View>
            <View>
                <Text>Bienvenido de vuelta</Text>
            </View>
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='correo' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setEmail(text)}/>
                </View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Contraseña' style={{paddingHorizontal:15}} secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)} />
                </View>
                <View style={styles.PadreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
                        <Text style={styles.textoBoton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={OlvidePassword}>
                        <Text style={{color:'orange', textDecorationLine: 'underline'}}>¿Olvidaste la contraseña?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.RegistrarseContenedor}>
                <Text style={styles.textResgistrarse}>¿No tienes cuenta?</Text>
                <TouchableOpacity onPress={Registrarse}>
                    <Text style={styles.textRegistrarse1}>Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    profile:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white'
    },
    tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding: '20%',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        
    },
    cajaTexto:{
        paddingVertical:20,
        backgroundColor: '#cccccc40',
        borderRadius:30,
        marginVertical:10
    },
    PadreBoton:{
        alignItems:'center',
    },
    cajaBoton:{
        backgroundColor:'#525FE1',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    textoBoton:{
        textAlign:'center',
        color:'white'
    },
    RegistrarseContenedor:{
        flexDirection: 'row', // Establece la dirección del contenedor como fila
        alignItems: 'center', // Alinea los elementos verticalmente en el centro
        justifyContent: 'center', // Alinea los elementos horizontalmente en el centro (puedes ajustar esto según sea necesario)
    },
    textResgistrarse: {
        fontSize: 16,
        marginHorizontal: 3, // Añade un margen horizontal entre los elementos de texto
    },
    textRegistrarse1:{
        color:'orange'
    }
})