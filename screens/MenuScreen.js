import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Alert } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Salir',
          onPress: () => {
            // Redirigir a la pantalla de Login
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          },
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../img/Eventos.jpg')} // Imagen de fondo
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>Menú Principal</Text>

        {/* Botón para Noticias */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('News')}
        >
          <Text style={styles.buttonText}>Noticias</Text>
        </TouchableOpacity>

        {/* Botón para Mis Materias */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Schedule')}
        >
          <Text style={styles.buttonText}>Mis Materias</Text>
        </TouchableOpacity>

        {/* Botón para Preselección */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Preselection')}
        >
          <Text style={styles.buttonText}>Preselección</Text>
        </TouchableOpacity>

        {/* Botón para Deuda */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Debt')}
        >
          <Text style={styles.buttonText}>Deuda</Text>
        </TouchableOpacity>

        {/* Botón para Solicitudes */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Requests')}
        >
          <Text style={styles.buttonText}>Solicitudes</Text>
        </TouchableOpacity>

        {/* Botón para Mis Tareas */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tasks')}
        >
          <Text style={styles.buttonText}>Mis Tareas</Text>
        </TouchableOpacity>

        {/* Botón para Eventos */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Events')}
        >
          <Text style={styles.buttonText}>Eventos</Text>
        </TouchableOpacity>

        {/* Botón para Videos */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Videos')}
        >
          <Text style={styles.buttonText}>Videos</Text>
        </TouchableOpacity>

        {/* Botón para Acerca de */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>Acerca de</Text>
        </TouchableOpacity>

        {/* Botón para Salir */}
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Salir</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#004080', 
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    borderColor: '#b30000',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MenuScreen;
