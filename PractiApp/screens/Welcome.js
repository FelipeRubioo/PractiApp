import React, { useState, useEffect } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen = ({ navigation }) => {
    // cargar las fuentes
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if (!fontsLoaded) {
            loadFonts();
        }
    });

    const loadFonts = async() => {
        await Font.loadAsync({
            'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
        });

        setFontsLoaded(true);
    }

    const [continuePressed, setContinuePressed] = useState(false);

    const handleContinue = () => {
        setContinuePressed(true);
        navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión al presionar el botón
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#013396" }}>
            <Image
            source={require('../assets/image5.png')}
            style={{ width: 200, height: 200 }}
            />
            <Text style={styles.Practicas}>Practicas Unison</Text>
            <Text style={styles.Bienvenido}>Bienvenido</Text>
            {/* <Button title="Continuar" onPress={handleContinue} /> */}
            <TouchableOpacity onPress={handleContinue}>
                <Image
                    source={require('../assets/btn.png')}
                    style={{width:100, height:100}}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#013396",
    },
    Practicas: {
        color: '#FFFFFF',
        fontSize: 30,
        padding: 5,
        paddingBottom:20,
        fontFamily: 'Montserrat'
    },
    Bienvenido:{
        color: "#ffff",
        fontSize: 20,
        padding: 5,
        paddingBottom:20,
        fontFamily: 'Montserrat'
    },
})

export default WelcomeScreen;
