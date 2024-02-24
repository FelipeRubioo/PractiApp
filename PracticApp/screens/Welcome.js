import React, { useState, useEffect } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = ({ navigation }) => {
    // cargar las fuentes
    const [fontsLoaded, setFontsLoaded] = useState(false);
    console.log('fonts state:', fontsLoaded)

    useEffect(() => {
        if (fontsLoaded == false) {
            loadFonts();
        }
    });

    const loadFonts = async() => {
        try {
            await Font.loadAsync({
                'Montserrat-bold': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
                'Montserrat-italic': require('../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
            });
            console.log('Loaded fonts...')
            setFontsLoaded(true);
        } catch (error) {
            console.log('ERROR: fonts not loaded...', error)
        }
    }

    const [continuePressed, setContinuePressed] = useState(false);

    const handleContinue = () => {
        setContinuePressed(true);
        navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión al presionar el botón
    };
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#013396" }}>
            <View>
                <Image
                source={require('../assets/image5.png')}
                style={{ width: 200, height: 200 }}
                />
                <Text style={styles.Practicas}>Prácticas Unison</Text>
                <Text style={styles.Bienvenido}>Bienvenido</Text>
                {/* <Button title="Continuar" onPress={handleContinue} /> */}
                <TouchableOpacity onPress={handleContinue}>
                <Image
                    source={require('../assets/btn.png')}
                    style={{width:100, height:100, justifyContent:'flex-end', marginLeft:'auto', marginTop:200, paddingBottom:100}}
                />
                </TouchableOpacity>
        </View>
        </SafeAreaView>
        
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
        paddingBottom:25,
        fontFamily: 'Montserrat-bold',
        fontWeight:'bold'
    },
    Bienvenido:{
        color: "#ffff",
        fontSize: 20,
        padding: 1,
        paddingBottom:20,
        alignItems:'',
        fontFamily: 'Montserrat-bold',
        marginLeft: 60
    },
})

export default WelcomeScreen;
