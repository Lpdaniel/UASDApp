import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

const RequestsScreen = () => {
  const [requests, setRequests] = useState([
    { id: '1', type: 'Cambio de Carrera', status: 'Aprobada', response: 'Solicitud aprobada. Cambio efectuado.' },
    { id: '2', type: 'Certificado Académico', status: 'Pendiente', response: null },
    { id: '3', type: 'Reintegro', status: 'Rechazada', response: 'Motivo: No se cumplen los requisitos para reintegro.' },
  ]);
  const [newRequest, setNewRequest] = useState('');
  const [showForm, setShowForm] = useState(false);

  const commonRequests = [
    'Cambio de Carrera',
    'Certificado Académico',
    'Reintegro',
    'Cambio de Horario',
    'Solicitud de Beca',
  ];

  const handleAddRequest = () => {
    if (!newRequest) {
      Alert.alert('Error', 'Por favor selecciona o ingresa una solicitud.');
      return;
    }

    const newRequestItem = {
      id: (requests.length + 1).toString(),
      type: newRequest,
      status: 'Pendiente',
      response: null,
    };

    setRequests([...requests, newRequestItem]);
    setNewRequest('');
    setShowForm(false);
    Alert.alert('Éxito', 'Solicitud enviada correctamente.');
  };

  const renderRequestItem = ({ item }) => (
    <View style={styles.requestCard}>
      <Text style={styles.requestType}>{item.type}</Text>
      <Text style={styles.requestStatus}>
        Estado: <Text style={getStatusStyle(item.status)}>{item.status}</Text>
      </Text>
      {item.response && <Text style={styles.requestResponse}>{item.response}</Text>}
    </View>
  );

  const getStatusStyle = (status) => {
    if (status === 'Aprobada') return { color: 'green', fontWeight: 'bold' };
    if (status === 'Rechazada') return { color: 'red', fontWeight: 'bold' };
    return { color: 'orange', fontWeight: 'bold' };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitudes</Text>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={renderRequestItem}
        contentContainerStyle={styles.list}
      />
      {showForm ? (
        <View style={styles.form}>
          <Text style={styles.formLabel}>Selecciona una solicitud común:</Text>
          <FlatList
            data={commonRequests}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.commonRequestButton}
                onPress={() => setNewRequest(item)}
              >
                <Text style={styles.commonRequestText}>{item}</Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <TextInput
            style={styles.input}
            placeholder="O escribe una solicitud personalizada"
            placeholderTextColor="#666"
            value={newRequest}
            onChangeText={setNewRequest}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddRequest}>
            <Text style={styles.addButtonText}>Enviar Solicitud</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setShowForm(false)}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addRequestButton}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.addRequestButtonText}>Nueva Solicitud</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  requestCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    elevation: 2,
  },
  requestType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 5,
  },
  requestStatus: {
    fontSize: 16,
    marginBottom: 5,
  },
  requestResponse: {
    fontSize: 14,
    color: '#666',
  },
  form: {
    marginTop: 20,
  },
  formLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  commonRequestButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  commonRequestText: {
    color: '#004080',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  addRequestButton: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addRequestButtonText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RequestsScreen;
