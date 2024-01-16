// RegistrationScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addUser, getAllUsers} from '../database';


const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const handleRegister = async () => {
    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      if (password === password2) {
        // Sprawdź, czy użytkownik już istnieje
        const userExists = await checkUserExists();
        // Sprawdź, czy email już istnieje
        const emailExists = await checkEmailExists(email);

        if (!userExists) {
          if(!emailExists){
            await registerUser();
          }else{
            // Jeżeli email istnieje
            Alert.alert('Błąd', 'email o podanej nazwie już istnieje.');
          }

        } else {
          // Jeśli użytkownik istnieje
          Alert.alert('Błąd', 'Użytkownik o podanej nazwie już istnieje.');
        }
      } else {
        //Jeźeli hasła nie są takie same
        Alert.alert('Błąd', 'Hasła nie są takie same. Spróbuj ponownie.');
      }
    }else {
      //Jeżeli nie są wypełnione dane
      Alert.alert('Błąd', 'Uzupełnij dane.');
    }
  };
  const registerUser = async () => {
    // Dodanie do bazy danych
    const result = await addUser(username, email, password);

    if (result) {
      // Pomyślnie dodano użytkownika
      Alert.alert('Rejestracja zakończona pomyślnie!');

      // Przenieś się do ekranu logowania
      navigation.navigate('Ekran logowania');
    } else {
      // Błąd podczas dodawania użytkownika
      Alert.alert('Błąd podczas rejestracji.');
    }
  };
  const checkUserExists = async () => {
    const existingUsers = await getAllUsers();
    return existingUsers.some(user => user.username === username);
  };
  const checkEmailExists = async (email) => {
    const existingUsers = await getAllUsers();
    return existingUsers.some(user => user.email === email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rejestracja</Text>

      <TextInput
        style={styles.input}
        placeholder="Nazwa użytkownika"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Adres email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hasło"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Powtórz hasło"
        secureTextEntry
        value={password2}
        onChangeText={(text) => setPassword2(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Zarejestruj się</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RegistrationScreen;

