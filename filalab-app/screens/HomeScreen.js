// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handlePress = (tipo) => {
    navigation.navigate('Ticket', { tipo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FilaLab - Emissão de Senha</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={() => handlePress('SP')}>
        <Text style={styles.buttonText}>Senha Prioritária (SP)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={() => handlePress('SG')}>
        <Text style={styles.buttonText}>Senha Geral (SG)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]} onPress={() => handlePress('SE')}>
        <Text style={styles.buttonText}>Retirada de Exames (SE)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
