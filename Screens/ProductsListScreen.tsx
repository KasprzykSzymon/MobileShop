// ProductsListScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getAllItems } from '../database';
const ProductsListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts(); // Pobierz listę produktów z bazy danych przy załadowaniu ekranu (działa po wylogowaniu użytkownika)
  }, []);
  const fetchProducts = async () => {
    try {
      const items = await getAllItems();
      setProducts(items);
    } catch (error) {
      console.error('Problem z odświeżeniem:', error);
    }
  };
  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('Ekran opisu produktu', { productId: item.id })
    }>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Produktów</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
      />
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
  productItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
export default ProductsListScreen;
