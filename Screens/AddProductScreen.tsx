// AddProductScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { addItem } from '../database';
import { useUser } from '../UserContext';
const AddProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  // const [selectedImage, setSelectedImage] = useState(null);
  const { state } = useUser();
  const currentUser = state.user;
  const handleAddProduct = async () => {
    if (productName.trim() !== '' && productPrice.trim() !== '') {
      try {
        const itemId = await addItem(currentUser.id, productName, productPrice, productDescription);
        Alert.alert('Sukces', `Produkt dodany do bazy danych! ID: ${itemId}`);
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        // setSelectedImage(null);
        navigation.navigate("Menu profilu");
      } catch (error) {
        Alert.alert('Błąd', 'Wystąpił problem podczas dodawania produktu.');
      }
    } else {
      Alert.alert('Błąd', 'Uzupełnij wszystkie pola.');
    }
  };
  // const handleOpenCamera = async () => {
  //   navigation.navigate("Ekran aparatu");
  //
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodaj Produkt</Text>
      {/*{selectedImage && (*/}
      {/*  <Image source={{ uri: selectedImage.path }} style={styles.imagePreview} />*/}
      {/*)}*/}
      <Text>Nazwa produktu:</Text>
      <TextInput
        style={styles.input}
        placeholder="Wpisz nazwę produktu"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <Text>Cena:</Text>
      <TextInput
        style={styles.input}
        placeholder="Wpisz cenę"
        keyboardType="numeric"
        value={productPrice}
        onChangeText={(text) => setProductPrice(text)}
      />
      <Text>Opis:</Text>
      <TextInput
        style={styles.input}
        placeholder="Wpisz opis produktu"
        value={productDescription}
        onChangeText={(text) => setProductDescription(text)}
      />
      {/*<Button title="Dodaj zdjęcie z aparatu" onPress={handleOpenCamera} />*/}
      <Button title="Dodaj produkt" onPress={handleAddProduct} />
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
  imagePreview: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
});
export default AddProductScreen;
