// AddProductScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import db from '../database';

const AddProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = async () => {
    if (productName.trim() !== '' && price.trim() !== '') {
      const result = await db.addProduct(productName, parseFloat(price));

      if (result.insertId) {
        Alert.alert('Success', 'Product added successfully.');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Failed to add product. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
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
        value={price}
        onChangeText={(text) => setPrice(text)}
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
