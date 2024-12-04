import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';

const LandingScreen = ({ navigation }) => {
  const handleMissionVisionValues = () => {
    Alert.alert(
      'Misión, Visión y Valores',
      'Misión y Visión: Formar profesionales críticos y eficientes para contribuir al desarrollo sostenible, la equidad y los derechos humanos, destacándose como una institución de excelencia y liderazgo académico.\n\nValores: Solidaridad, transparencia, verdad, igualdad, libertad, equidad, tolerancia, responsabilidad, convivencia y paz.'
    );
  };

  return (
    <ImageBackground 
      source={require('../img/Portada.jpg')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Logo de la universidad */}
        <Image 
          source={require('../img/uni.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />

        {/* Texto descriptivo */}
        <Text style={styles.description}>
          Universidad Autónoma de Santo Domingo
        </Text>

        {/* Botón para mostrar misión, visión y valores */}
        <TouchableOpacity 
          style={styles.missionButton} 
          onPress={handleMissionVisionValues}
        >
          <Text style={styles.missionButtonText}>Misión, Visión y Valores</Text>
        </TouchableOpacity>

        {/* Botón para continuar */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurecimiento del fondo
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 200, // Tamaño más grande
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  missionButton: {
    backgroundColor: '#004080',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '70%',
  },
  missionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '70%',
  },
  buttonText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LandingScreen;
