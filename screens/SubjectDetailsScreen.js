import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const SubjectDetailsScreen = ({ route }) => {
  const { subject } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subject.name}</Text>
      <Text style={styles.detail}>Profesor: {subject.professor}</Text>
      <Text style={styles.detail}>Horario: {subject.time}</Text>
      <Text style={styles.detail}>Aula: {subject.room} - {subject.building}</Text>

      <Text style={styles.subtitle}>Mapa Interactivo</Text>
      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: 'https://uasd.edu.do/campus/' }}
          style={styles.map}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 15,
  },
  detail: {
    fontSize: 16,
    color: '#004080',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004080',
    marginTop: 20,
    marginBottom: 10,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height / 2, 
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default SubjectDetailsScreen;
