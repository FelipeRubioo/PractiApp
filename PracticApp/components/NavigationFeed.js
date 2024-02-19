import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import FeedAlumnos from '../screens/FeedAlumnos'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { SearchBar } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PracticaCompleta from '../screens/PracticaCompleta';

//Aqui se perzonaliza el header
const FeedHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Practicas Unison</Text>
        <TouchableOpacity style={styles.settings}>
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

//Este stack hace que el preview de la practica pase a la practica completa
const Stack = createNativeStackNavigator()
const StackPractica = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeedAlumnos" component={FeedAlumnos} options={{headerShown: false}} />
      <Stack.Screen name="PracticaCompleta" component={PracticaCompleta} />
    </Stack.Navigator>
  )
}

//Se crea el tab del feed
const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderTopColor: 'white',
            shadowColor: 'white'
          },
          headerStyle: {
            backgroundColor: '#013396',
            height: 180
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
            headerTitle: (props) => <FeedHeader {...props} /> 
          }}
        >
          {() => <StackPractica />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
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

export default Tabs