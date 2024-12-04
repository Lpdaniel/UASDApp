import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Obtener datos del usuario guardados en AsyncStorage
      const storedUser = await AsyncStorage.getItem('user');
      const userData = storedUser ? JSON.parse(storedUser) : null;

      if (userData && username === userData.username && password === userData.password) {
        Alert.alert('Éxito', 'Inicio de sesión exitoso.');
        navigation.navigate('Menu');
      } else {
        Alert.alert('Error', 'Credenciales incorrectas.');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un problema al iniciar sesión.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Recuperación de Contraseña',
      'Un enlace de recuperación ha sido enviado a tu correo registrado.'
    );
  };

  const handleSignUpLink = () => {
    Linking.openURL('https://uasd.edu.do/inscripcion'); // Redirige a la página de inscripción
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Campo de Usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />

      {/* Campo de Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Botón de Inicio de Sesión */}
      <TouchableOpacity style={styles.buttonYellow} onPress={handleLogin}>
        <Text style={styles.buttonTextBlue}>Entrar</Text>
      </TouchableOpacity>

      {/* Botón de Registro */}
      <TouchableOpacity style={styles.buttonBlue} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonTextWhite}>Registrarse</Text>
      </TouchableOpacity>

      {/* Enlace para Recuperar Contraseña */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      {/* Enlace para Inscripción */}
      <TouchableOpacity onPress={handleSignUpLink}>
        <Text style={styles.link}>Estudia con Nosotros</Text>
      </TouchableOpacity>

      {/* Botón para regresar al Landing */}
      <TouchableOpacity
        style={styles.landingButton}
        onPress={() => navigation.navigate('Landing')}
      >
        <Text style={styles.landingButtonText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Fondo blanco
    padding: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080', // Texto azul
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonYellow: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  buttonBlue: {
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  buttonTextBlue: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextWhite: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  landingButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  landingButtonText: {
    color: '#004080',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
