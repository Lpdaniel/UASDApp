import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      // Guardar datos en AsyncStorage
      const userData = { username, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Éxito', 'Registro exitoso. Ahora puedes iniciar sesión.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un problema al registrar el usuario.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.buttonYellow} onPress={handleRegister}>
        <Text style={styles.buttonTextBlue}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
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
  buttonTextBlue: {
    color: '#004080',
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
});

export default RegisterScreen;
