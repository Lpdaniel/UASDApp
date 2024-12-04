import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Linking from 'expo-linking';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Entrega de Informe Final',
      dueDate: '2024-12-06',
      platform: 'https://moodle.uasd.edu.do',
    },
    {
      id: '2',
      title: 'Presentación del Proyecto',
      dueDate: '2024-12-08',
      platform: 'https://moodle.uasd.edu.do',
    },
    {
      id: '3',
      title: 'Examen Parcial',
      dueDate: '2024-12-10',
      platform: 'https://moodle.uasd.edu.do',
    },
    {
      id: '4',
      title: 'Quiz de Matemáticas',
      dueDate: '2024-12-12',
      platform: 'https://moodle.uasd.edu.do',
    },
    {
      id: '5',
      title: 'Tarea de Historia',
      dueDate: '2024-12-15',
      platform: 'https://moodle.uasd.edu.do',
    },
  ]);

  // Parte de la notificacion para las tareas a vencer
  const checkUpcomingTasks = () => {
    const today = new Date();
    const upcomingTasks = tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      const difference = (dueDate - today) / (1000 * 60 * 60 * 24);
      return difference >= 0 && difference <= 3;
    });

    if (upcomingTasks.length > 0) {
      Alert.alert(
        'Tareas Próximas',
        `Tienes ${upcomingTasks.length} tarea(s) que vencen pronto:\n` +
          upcomingTasks.map((task) => `- ${task.title} (Vence: ${task.dueDate})`).join('\n')
      );
    } else {
      Alert.alert('Sin tareas próximas', 'No tienes tareas próximas a vencer.');
    }
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDueDate}>Fecha límite: {item.dueDate}</Text>
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => Linking.openURL(item.platform)}
      >
        <Text style={styles.linkButtonText}>Ir al Aula Virtual</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.reminderButton} onPress={checkUpcomingTasks}>
        <Text style={styles.reminderButtonText}>Recordatorio de Tareas</Text>
      </TouchableOpacity>
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
  taskCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    elevation: 2,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 5,
  },
  taskDueDate: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  linkButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#004080',
    fontWeight: 'bold',
    fontSize: 16,
  },
  reminderButton: {
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  reminderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TasksScreen;
