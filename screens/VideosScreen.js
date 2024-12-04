import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, ImageBackground } from 'react-native';

const VideosScreen = () => {
  const [videos, setVideos] = useState([
    {
      id: '1',
      title: 'Tutorial: Cómo verificar el estado de ponencias para ALAS 2024',
      link: 'https://www.youtube.com/watch?v=R5z_RS9xlEA',
    },
    {
      id: '2',
      title: 'Videos de Graduandos - Investidura Ordinaria de Grado y Postgrado',
      link: 'https://youtu.be/aDOwDeBsmIw?si=XyWPgpE5XYHNPuLX',
    },
    {
      id: '3',
      title: 'Conferencia: Tren de Levitación Magnética',
      link: 'https://youtu.be/LWYMuC1q6Rs?si=c0chIfvYzPa70C3Y',
    },
  ]);

  const handleOpenVideo = (link) => {
    Linking.openURL(link).catch((err) =>
      console.error("Couldn't load video, error: ", err)
    );
  };

  return (
    <ImageBackground
      source={require('../img/Eventos.jpg')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Recursos Educativos</Text>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.videoCard}
              onPress={() => handleOpenVideo(item.link)}
            >
              <Text style={styles.videoTitle}>{item.title}</Text>
              <Text style={styles.videoLink}>Ver en YouTube</Text>
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
    padding: 20,
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
  videoCard: {
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
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 5,
  },
  videoLink: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});

export default VideosScreen;
