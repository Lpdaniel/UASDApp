import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreselectionScreen = ({ navigation }) => {
  const [subjects, setSubjects] = useState([
    { id: '1', name: 'Matemáticas', selected: false },
    { id: '2', name: 'Historia Dominicana', selected: false },
    { id: '3', name: 'Química General', selected: false },
    { id: '4', name: 'Inglés Avanzado', selected: false },
    { id: '5', name: 'Física Teórica', selected: false },
    { id: '6', name: 'Biología Molecular', selected: false },
    { id: '7', name: 'Arte Contemporáneo', selected: false },
    { id: '8', name: 'Programación en Python', selected: false },
  ]);

  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const checkConfirmation = async () => {
      const isConfirmed = await AsyncStorage.getItem('preselectionConfirmed');
      if (isConfirmed === 'true') {
        setConfirmed(false);
      }
    };
    checkConfirmation();
  }, []);

  const toggleSelection = (id) => {
    if (confirmed) {
      Alert.alert('Restricción', 'No puedes modificar la preselección una vez confirmada.');
      return;
    }
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === id ? { ...subject, selected: !subject.selected } : subject
      )
    );
  };

  const confirmSelection = async () => {
    if (confirmed) {
      Alert.alert('Restricción', 'Ya has confirmado tu preselección.');
      return;
    }

    const selectedSubjects = subjects.filter((subject) => subject.selected);
    if (selectedSubjects.length === 0) {
      Alert.alert('Error', 'Debes seleccionar al menos una materia.');
      return;
    }

    try {
      await AsyncStorage.setItem('selectedSubjects', JSON.stringify(selectedSubjects));
      await AsyncStorage.setItem('preselectionConfirmed', 'true');
      setConfirmed(true);
      Alert.alert('Éxito', 'Materias preseleccionadas correctamente.');
    } catch (error) {
      console.error('Error al guardar materias:', error);
      Alert.alert('Error', 'No se pudieron guardar las materias.');
    }
  };

  return (
    <View style={styles.container}>
            <Text style={styles.title}>Preselección de Asignaturas</Text>

      {/* Botón para regresar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>

      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.subjectItem, item.selected && styles.selectedItem]}
            onPress={() => toggleSelection(item.id)}
            disabled={confirmed} // Desactiva la selección si está confirmado
          >
            <Text style={styles.subjectName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {!confirmed && (
        <TouchableOpacity style={styles.confirmButton} onPress={confirmSelection}>
          <Text style={styles.confirmButtonText}>Confirmar Selección</Text>
        </TouchableOpacity>
      )}
      {confirmed && <Text style={styles.confirmedText}>Preselección Confirmada</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60, // Baja todo un poco más
    paddingBottom: 50,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 10,
    
  },
  backButtonText: {
    color: '#004080',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
    textAlign: 'center',
    marginBottom: 20,
  },
  subjectItem: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    elevation: 2,
  },
  selectedItem: {
    borderColor: '#ffcc00',
    backgroundColor: '#fffbe6',
  },
  subjectName: {
    fontSize: 18,
    color: '#004080',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmedText: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default PreselectionScreen;
