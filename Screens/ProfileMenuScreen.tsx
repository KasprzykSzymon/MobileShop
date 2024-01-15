// ProfileMenuScreen.tsx

import React from 'react';
import { View,Button, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';
import {deleteUser} from "../database";

const ProfileMenuScreen = () => {
  const navigation = useNavigation();
  const navigateToChangePassword = () => {
    navigation.navigate('ChangePassword');
  };
  const navigateToAddProduct = () => {
    navigation.navigate('AddProduct');
  };

  const wyloguj = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Profile' }],
      })
    );
  };

  const handleDeleteAccount = () => {
    // Display a confirmation alert
    Alert.alert(
      'Usuń kotot',
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
      // Implement the logic to delete the account from the database
      const userId = 2; // Replace with the actual user ID or obtain it from your authentication state
      const rowsAffected = await deleteUser(userId);

      if (rowsAffected > 0) {
        // Account deleted successfully
        Alert.alert('Usunięto konto', 'Twoje konto zostału usunięte.');
        // Navigate to the login screen or any other appropriate screen
        navigation.navigate('Login');
      } else {
        // Error during deletion
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
