import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useUser } from '../UserContext';
import { getUserByUsername } from '../database';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useUser();

  const handleLogin = async () => {
    if (userName.trim() !== '' && password.trim() !== '') {
      const user = await getUserByUsername(userName, password);
      if (user) {
        Alert.alert('Zalogowano', `Witaj, ${user.username}!`);
        dispatch({ type: 'SET_USER', payload: user });
        // Możesz dodać nawigację do ekranu głównego lub innego ekranu po zalogowaniu
        navigation.navigate("Menu profilu")
      } else {
        Alert.alert('Błąd logowania', 'Nieprawidłowa nazwa użytkownika lub hasło.');
      }
    } else {
      Alert.alert('Błąd', 'Uzupełnij dane.');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Logowanie</Text>
        <Text>Login:</Text>
        <TextInput
            style={styles.input}
            placeholder="Nazwa użytkownika"
            value={userName}
            onChangeText={(text) => setUserName(text)}
        />

        <Text>Hasło:</Text>
        <TextInput
            style={styles.input}
            placeholder="Hasło"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
        />

        <Button title="Zaloguj się" onPress={handleLogin} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default LoginScreen;
