// ProfileMenuScreen.tsx
import React from 'react';
import { View,Button, Alert} from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useUser } from '../UserContext';
import {deleteUser} from "../database";
const ProfileMenuScreen = () => {
  const { state } = useUser();
  const currentId = state.user.id;
  const navigation = useNavigation();
  const navigateToChangePassword = () => {
    navigation.navigate('Ekran zmiany hasła');
  };
  const navigateToAddProduct = () => {
    navigation.navigate('Ekran dodania produktu');
  };
  const wyloguj = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Ekran Profilu' }],
      })
    );
  };
  const handleDeleteAccount = () => {
    // Display a confirmation alert
    Alert.alert(
      'Usuń konto',
      'Na pewno chcesz usunąć konto?',
      [
        {
          text: 'Anuluj',
          style: 'anuluj',
        },
        {
          text: 'Usuń',
          onPress: confirmDeleteAccount,
        },
      ],
      { cancelable: false }
    );
  };
  const confirmDeleteAccount = async () => {
    try {
      const userId = currentId;
      const rowsAffected = await deleteUser(userId);
      if (rowsAffected > 0) {
        Alert.alert('Usunięto konto', 'Twoje konto zostału usunięte.');
        navigation.navigate('Ekran logowania');
      } else {
        // Błąd usuwania konta
        Alert.alert('Error', 'Błąd podczas usuwania konta.');
      }
    } catch (error) {
      console.error('Błąd usuwania konta:', error);
    }
  };
  return (
    <View>
      <Button title="Zmień hasło" onPress={navigateToChangePassword}/>
      <Button title="Dodaj produkt" onPress={navigateToAddProduct}/>
      <Button title="wyloguj" onPress={wyloguj}/>
      <Button title="Usuń konto" onPress={handleDeleteAccount}/>
    </View>
  );
};
export default ProfileMenuScreen;
