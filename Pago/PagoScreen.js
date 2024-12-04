import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const PagoScreen = ({ route, navigation }) => {
  const { description, amount } = route.params;

  // Estados para los datos del formulario
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handlePayment = () => {
    if (!email || !cardNumber || !expiryDate || !cvc || !cardholderName || !postalCode) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    Alert.alert('Éxito', 'El pago ha sido procesado correctamente.');
    navigation.goBack(); // Regresar después del pago
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Pago</Text>
      <Text style={styles.paymentDetails}>Descripción: {description}</Text>
      <Text style={styles.paymentDetails}>Monto: ${amount}.00</Text>

      {/* Tarjeta de Crédito */}
      <View style={styles.cardFront}>
        <Text style={styles.cardNumber}>{cardNumber || '**** **** **** ****'}</Text>
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardLabel}>CARDHOLDER</Text>
            <Text style={styles.cardValue}>{cardholderName || 'NOMBRE Y APELLIDO'}</Text>
          </View>
          <View>
            <Text style={styles.cardLabel}>VALID THRU</Text>
            <Text style={styles.cardValue}>{expiryDate || 'MM/YY'}</Text>
          </View>
        </View>
      </View>

      {/* Campos de Entrada */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        placeholderTextColor="#666"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="number-pad"
        maxLength={16}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="MM/AA"
          placeholderTextColor="#666"
          value={expiryDate}
          onChangeText={setExpiryDate}
          keyboardType="number-pad"
          maxLength={5}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="CVC"
          placeholderTextColor="#666"
          value={cvc}
          onChangeText={setCvc}
          keyboardType="number-pad"
          maxLength={3}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nombre del titular de la tarjeta"
        placeholderTextColor="#666"
        value={cardholderName}
        onChangeText={setCardholderName}
      />
      <TextInput
        style={styles.input}
        placeholder="Código postal"
        placeholderTextColor="#666"
        value={postalCode}
        onChangeText={setPostalCode}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pagar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
    textAlign: 'center',
    marginBottom: 20,
  },
  paymentDetails: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardFront: {
    width: '100%',
    height: 200,
    backgroundColor: '#6e44ff',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 5,
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
    textAlign: 'center',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: 12,
    color: '#ccc',
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  payButton: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PagoScreen;
