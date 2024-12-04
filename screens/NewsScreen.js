import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Alert, Linking } from 'react-native';
import axios from 'axios';

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '9b2f81fab8fe40b6ae8978afa79d877d'; 
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar noticias:', error);
        Alert.alert('Error', 'No se pudieron cargar las noticias.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffcc00" />
        <Text style={styles.loadingText}>Cargando noticias...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsCard}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            {item.description && (
              <Text style={styles.newsBody} numberOfLines={3}>
                {item.description}
              </Text>
            )}
            <TouchableOpacity
              style={styles.readMoreButton}
              onPress={() => {
                if (item.url) {
                  Linking.openURL(item.url); 
                } else {
                  Alert.alert('Error', 'No se puede abrir este enlace.');
                }
              }}
            >
              <Text style={styles.readMoreText}>Leer más</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004080',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004080',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  newsCard: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 10,
  },
  newsBody: {
    fontSize: 14,
    color: '#333',
  },
  readMoreButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
  },
  readMoreText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default NewsScreen;
