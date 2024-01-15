// AddProductScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {addItem} from '../database';
import { useUser } from '../UserContext';

const AddProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const { state } = useUser();
  const currentUser = state.user;
  const handleAddProduct = async () => {
    if (productName.trim() !== '' && productPrice.trim() !== '') {
      try {
        const itemId = await addItem(currentUser.id, productName, productPrice);
        Alert.alert('Sukces', `Produkt dodany do bazy danych! ID: ${itemId}`);
        setProductName('');
        setProductPrice('');
      } catch (error) {
        Alert.alert('Błąd', 'Wystąpił problem podczas dodawania produktu.');
      }
    } else {
      Alert.alert('Błąd', 'Uzupełnij wszystkie pola.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      <Text>Product Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />

      <Text>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        value={productPrice}
        onChangeText={(text) => setProductPrice(text)}
      />

      <Button title="Add Product" onPress={handleAddProduct} />
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

export default AddProductScreen;
