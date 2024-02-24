import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// stack
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer} from "@react-navigation/native"
// importar los componentes (screens)
import Login from './screens/Login';
import Home from './screens/Home';
import WelcomeScreen from './screens/Welcome';
import OlvidePassword from './screens/OlvidePassword';
import Registrarse from './screens/Registrarse';
import NavigationFeed from './components/NavigationFeed'
import { Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login}
        options={{
          title: ''
        }}
        />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Feed" component={NavigationFeed} options={{headerShown: false}} />
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
