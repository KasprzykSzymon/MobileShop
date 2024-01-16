// ProductsListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getAllItems } from '../database';

const ProductsListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Pobierz listę produktów z bazy danych przy załadowaniu ekranu
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const items = await getAllItems();
      // console.log(items);
      setProducts(items);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const navigateToProductDetail = (productId) => {
    // Przejdź do ekranu szczegółów produktu
    navigation.navigate('ProductDetail', { productId });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigateToProductDetail(item.id)}
    >
      <Text>{item.name}</Text>
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
