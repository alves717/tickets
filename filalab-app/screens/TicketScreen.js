// screens/TicketScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TicketScreen({ route, navigation }) {
  const { tipo } = route.params;

  const gerarNumeroSenha = () => {
    const data = new Date();
    const YY = String(data.getFullYear()).slice(2);
    const MM = String(data.getMonth() + 1).padStart(2, '0');
    const DD = String(data.getDate()).padStart(2, '0');
    const seq = Math.floor(Math.random() * 900 + 100); // sequência aleatória fictícia
    return `${YY}${MM}${DD}-${tipo}${seq}`;
  };

  const senha = gerarNumeroSenha();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sua Senha:</Text>
      <Text style={styles.ticket}>{senha}</Text>
      <Text style={styles.info}>Aguarde ser chamado no painel.</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 22,
    marginBottom: 10,
  },
  ticket: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
