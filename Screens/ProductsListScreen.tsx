// ProductsListScreen.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, RefreshControl, TouchableOpacity, StyleSheet } from 'react-native';
import { getAllItems } from '../database';

const ProductsListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  }, []);

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
