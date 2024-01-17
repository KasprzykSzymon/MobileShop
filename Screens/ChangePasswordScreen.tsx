// ChangePasswordScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useUser } from '../UserContext';
import { updateUserPassword } from '../database';
const ChangePasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const { state } = useUser();
  const zalogowanyUzytkownik = state.user;
  const handleChangePassword = async () => {
    if (currentPassword.trim() !== '' && newPassword.trim() !== '') {
      if (currentPassword === zalogowanyUzytkownik.password) {
        // Aktualizuj hasło w bazie danych
        await updateUserPassword(zalogowanyUzytkownik.id, newPassword);
        Alert.alert('Sukces', 'Hasło zostało pomyślnie zmienione.');
        navigation.navigate('Ekran logowania');
      } else {
        Alert.alert('Błąd', 'Aktualne hasło jest nieprawidłowe.');
      }
    } else {
      Alert.alert('Error', 'Uzupełnij puste pola');
    }
  };
  return (
    <View style={styles.container}>
      <Text>Aktualne hasło:</Text>
      <TextInput
        style={styles.input}
        placeholder="Wpisz aktualne hasło"
        secureTextEntry
        value={currentPassword}
        onChangeText={(text) => setCurrentPassword(text)}
      />
      <Text>Nowe hasło:</Text>
      <TextInput
        style={styles.input}
        placeholder="Wpisz nowe hasło"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <Text>Powtórz nowe hasło:</Text>
      <TextInput
        style={styles.input}
        placeholder="Powtórz nowe hasło"
        secureTextEntry
        value={newPassword2}
        onChangeText={(text) => setNewPassword2(text)}
      />
      <Button title="Zmień hasło" onPress={handleChangePassword} />
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
export default ChangePasswordScreen;
