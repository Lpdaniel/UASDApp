import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const ScheduleScreen = ({ navigation }) => {
  const subjects = [
    { id: '1', name: 'Matemáticas I', professor: 'Prof. Juan Pérez', time: '8:00 AM - 10:00 AM', room: 'Aula 101', building: 'Edificio A' },
    { id: '2', name: 'Física General', professor: 'Prof. Ana García', time: '10:00 AM - 12:00 PM', room: 'Aula 202', building: 'Edificio B' },
    { id: '3', name: 'Química Orgánica', professor: 'Prof. Luis Rodríguez', time: '2:00 PM - 4:00 PM', room: 'Aula 303', building: 'Edificio C' },
    { id: '4', name: 'Historia Dominicana', professor: 'Prof. María López', time: '4:00 PM - 6:00 PM', room: 'Aula 401', building: 'Edificio D' },
    { id: '5', name: 'Biología', professor: 'Prof. José Hernández', time: '6:00 PM - 8:00 PM', room: 'Aula 501', building: 'Edificio E' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.subjectCard}
      onPress={() => navigation.navigate('SubjectDetails', { subject: item })}
    >
      <Text style={styles.subjectName}>{item.name}</Text>
      <Text style={styles.subjectDetails}>Profesor: {item.professor}</Text>
      <Text style={styles.subjectDetails}>Horario: {item.time}</Text>
      <Text style={styles.subjectDetails}>Aula: {item.room} - {item.building}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Materias</Text>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10, 
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    width: '100%', 
  },
  subjectCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: Dimensions.get('window').width - 20, 
    alignSelf: 'center', 
    elevation: 2, 
  },
  subjectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 5,
  },
  subjectDetails: {
    fontSize: 14,
    color: '#333',
  },
});

export default ScheduleScreen;
