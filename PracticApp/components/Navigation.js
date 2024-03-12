import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, useNavigation} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Hooks
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { SearchBar } from '@rneui/themed';
import { singOut } from '../hooks/logout';

//screens
import WelcomeScreen from '../screens/Welcome'
import Login from '../screens/Login'
import OlvidePassword from '../screens/OlvidePassword'
import Registrarse from '../screens/Registrarse'
import NavigationFeed from './NavigationFeed'
import AddPractica from '../screens/addPractica';
import PracticaCompleta from '../screens/PracticaCompleta';
import FeedAlumnos from '../screens/FeedAlumnos'



const Navigation = () =>  {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator()


  const FeedHeader = () => {
    const navigation = useNavigation();
    const handleLogout = () => {
      Alert.alert(
        'Cerrar sesión',
        '¿Estas seguro de que deseas cerrrar sesión?',
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Cerrar Sesión',
            onPress: () => {
              singOut();
              navigation.popToTop();
              // TODO:
              //navigation.dispatch(StackActions.popToTop());
            }
          }
        ]
      )
    }
  
    return (
      <View style={styles.headerWrapper}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Practicas Unison</Text>
          <TouchableOpacity style={styles.settings} onPress={handleLogout}>
            <Feather name={'settings'} color={'white'} size={30}  />
          </TouchableOpacity>
        </View>
        <View style={[styles.container]}>
          <SearchBar
            lightTheme={'true'}
          />
          <TouchableOpacity style={styles.sliders}>
            <FontAwesome name="sliders" size={30} color="white"  />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const StackPractica = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#013396',
            height: 180
          }
        }}
      >
        <Stack.Screen name="FeedAlumnos" component={FeedAlumnos} options={{
            headerTitle: (props) => <FeedHeader {...props} />
          }} 
        />
        <Stack.Screen name="PracticaCompleta" component={PracticaCompleta} options={{
            title: 'Practica',
            headerTitleStyle: {
              fontSize: 25
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#013396'
            }
          }} 
        />
        <Stack.Screen name="AddPractica" component={AddPractica} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    )
  }

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderTopColor: 'white',
            shadowColor: 'white'
          }
        }}
      >
        <Tab.Screen
          name=" "
          options={{ 
            tabBarIcon: ({ focused }) => (
              <Feather
              name={'home'}
              size={28}
              color={focused ? '#EAA627' : 'black'}
              />
            ),
            headerShown: false,
            unmountOnBlur: true
          }}
        >
          {() => <StackPractica />}
        </Tab.Screen>
      </Tab.Navigator>
    )
  }

  //Inicio, lo que antes estaba en App.js
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login}
        options={{
          title: ''
        }}
        />
        <Stack.Screen name="Feed" component={Tabs} options={{headerShown: false}} />
        <Stack.Screen name="OlvidePassword" component={OlvidePassword} options={{headerShown: false}}/>
        <Stack.Screen name="Registrarse" component={Registrarse} options={{title:''}}/>
      </Stack.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    flexDirection:'column',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titulo: {
    margin: 10,
    color: 'white',
    width: '70%',
    fontSize: 28
  },
  settings: {
    margin: 20,
    width: '10%',
  },
  buscador:{
    height: '100%',
    width: '100%'
  },
  sliders: {
    margin: 20,
    width: '10%',
  }
})

export default Navigation;