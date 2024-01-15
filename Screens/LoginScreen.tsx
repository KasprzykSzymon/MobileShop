import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { getUserByUsername } from '../database';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    // Ustaw pusty tytuł, gdy komponent zostanie zamontowany
    navigation.setOptions({ title: '' });
  }, [navigation]);

  const handleLogin = async () => {
    if (userName.trim() !== '' && password.trim() !== '') {
      const user = await getUserByUsername(userName, password);
      if (user) {
        Alert.alert('Zalogowano', `Witaj, ${user.username}!`);
        // Możesz dodać nawigację do ekranu głównego lub innego ekranu po zalogowaniu
        navigation.reset({
          index: 0,
          routes: [{ name: 'ProfileMenuNavigation' }],
        });
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
