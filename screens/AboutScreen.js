import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../img/Daniel.png')} style={styles.image} />
      <Text style={styles.name}>Julio Daniel Lachapelle P.</Text>
      <Text style={styles.title}>Desarrollador de la Aplicación</Text>
      <Text style={styles.description}>
        Soy un estudiante del itla que le gusto bastante lo que es el tema de react algunas cosas de esta app tuve la ayuda de 
        cierto foros y de algunas paginas de diseño, pero en cuanto a funcionalidad la mayor parte fue creada por mi, espero y les guste.
      </Text>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Información de Contacto</Text>
        <Text style={styles.infoText}>Correo: lpdaniel681@gmail.com</Text>
        <Text style={styles.infoText}>Teléfono: +1 829-802-0824</Text>
        <Text style={styles.infoText}>GitHub: https://github.com/Lpdaniel</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#004080',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  infoSection: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default AboutScreen;
