import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

const EventsScreen = ({ navigation }) => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Charla sobre Inteligencia Artificial', date: '2024-12-15', time: '10:00 AM', location: 'Auditorio UASD', description: 'Una charla sobre los avances en inteligencia artificial y su impacto en la educación.' },
    { id: '2', title: 'Feria de Empleos', date: '2024-12-20', time: '9:00 AM', location: 'Pabellón Universitario', description: 'Conecta con empresas y busca oportunidades laborales en la feria anual de empleos.' },
    { id: '3', title: 'Concierto Navideño', date: '2024-12-22', time: '7:00 PM', location: 'Plaza Universitaria', description: 'Disfruta del concierto navideño organizado por el coro de la UASD.' },
  ]);

  const handleEventPress = (event) => {
    Alert.alert(
      event.title,
      `Fecha: ${event.date}\nHora: ${event.time}\nUbicación: ${event.location}\n\nDescripción: ${event.description}`
    );
  };

  return (
    <ImageBackground
      source={require('../img/Eventos.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Eventos Académicos</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.eventItem}
              onPress={() => handleEventPress(item)}
            >
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDetails}>{item.date} - {item.time}</Text>
              <Text style={styles.eventLocation}>{item.location}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 50,
  },
  listContent: {
    paddingBottom: 20,
  },
  eventItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 5,
  },
  eventDetails: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
});

export default EventsScreen;
