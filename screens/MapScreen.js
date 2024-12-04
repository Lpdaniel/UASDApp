import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = ({ route }) => {
  const room = route?.params?.room || 'Aula desconocida';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta funcionalidad aún no está implementada.</Text>
      <Text style={styles.subText}>Ubicación del aula: {room}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004080',
    padding: 20,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#ffcc00',
    textAlign: 'center',
  },
});

export default MapScreen;
