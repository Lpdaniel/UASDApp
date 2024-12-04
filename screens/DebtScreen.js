import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const DebtScreen = ({ navigation }) => {
  const debts = [
    { id: '1', description: 'Matrícula 2024-1', amount: '5000', dueDate: '15/01/2024' },
    { id: '2', description: 'Curso de Inglés Avanzado', amount: '3500', dueDate: '10/01/2024' },
    { id: '3', description: 'Laboratorio de Química', amount: '2000', dueDate: '08/01/2024' },
    { id: '4', description: 'Taller de Programación', amount: '1800', dueDate: '20/01/2024' },
    { id: '5', description: 'Certificado Académico', amount: '1000', dueDate: '25/01/2024' },
  ];

  const renderDebtItem = ({ item }) => (
    <View style={styles.debtCard}>
      <Text style={styles.debtDescription}>{item.description}</Text>
      <Text style={styles.debtDetails}>Monto: ${item.amount}.00</Text>
      <Text style={styles.debtDetails}>Fecha límite: {item.dueDate}</Text>
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate('Pago', { description: item.description, amount: item.amount })}
      >
        <Text style={styles.payButtonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado de Deuda</Text>
      <FlatList
        data={debts}
        keyExtractor={(item) => item.id}
        renderItem={renderDebtItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
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
  debtCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    elevation: 2,
  },
  debtDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 5,
  },
  debtDetails: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  payButtonText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DebtScreen;
