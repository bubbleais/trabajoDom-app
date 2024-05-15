import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 
/*Importación de las dependencias para crear la navegación */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
/* Importación de las pantallas */
import pantalla1 from './screens/pantalla1';
 
 
export default function App() {
 
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>  
      <Stack.Navigator
        initialRouteName='Pantalla1'
 
        >
        
        <Stack.Screen name="Pantalla" component={pantalla1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}