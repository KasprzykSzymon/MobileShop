// ProductDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;

  // Pobierz informacje o produkcie z bazy danych na podstawie productId

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Szczegóły Produktu</Text>
      <Text>ID Produktu: {productId}</Text>
      {/* Wyświetl inne informacje o produkcie */}
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
});

export default ProductDetailScreen;
