import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de las pantallas
import LandingScreen from './Login/LandingScreen';
import LoginScreen from './Login/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import NewsScreen from './screens/NewsScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import MapScreen from './screens/MapScreen';
import RegisterScreen from './Login/RegisterScreen';
import PreselectionScreen from './screens/PreselectionScreen';
import DebtScreen from './screens/DebtScreen';
import RequestsScreen from './screens/RequestsScreen';
import EventsScreen from './screens/EventsScreen';
import TasksScreen from './screens/TasksScreen';
import VideosScreen from './screens/VideosScreen';
import AboutScreen from './screens/AboutScreen';
import SubjectDetailsScreen from './screens/SubjectDetailsScreen';
import PagoScreen from './Pago/PagoScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* Pantalla inicial */}
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        {/* Pantalla de login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* Pantalla de registro */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        {/* Menú Principal */}
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        {/* Noticias */}
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{ headerShown: false }}
        />
        {/* Schedule */}
        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ headerShown: true, title: 'Mis Materias' }}
        />
        {/* SubjectDetails */}
        <Stack.Screen
          name="SubjectDetails"
          component={SubjectDetailsScreen}
          options={{ headerShown: true, title: 'Detalles de la Materia' }}
        />
        {/* Mapa */}
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: true, title: 'Mapa del Campus' }}
        />
        {/* Preselección */}
        <Stack.Screen
          name="Preselection"
          component={PreselectionScreen}
          options={{ headerShown: false }}
        />
        {/* Deudas */}
        <Stack.Screen
          name="Debt"
          component={DebtScreen}
          options={{ headerShown: false }}
        />
        {/* Solicitudes */}
        <Stack.Screen
          name="Requests"
          component={RequestsScreen}
          options={{ headerShown: false }}
        />
        {/* Eventos */}
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{ headerShown: false }}
        />
        {/* Tareas */}
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{ headerShown: false }}
        />
        {/* Videos */}
        <Stack.Screen
          name="Videos"
          component={VideosScreen}
          options={{ headerShown: false }}
        />
        {/* Acerca de */}
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        {/* Pago */}
        <Stack.Screen
          name="Pago"
          component={PagoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
