// ProductDetailScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getProductById } from '../database';  //pobranie danych produktu poprzez ID
const ProductDetailScreen = ({ route }) => {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);
  // const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const Product = await getProductById(route.params.productId);
        setProduct(Product);
    };
    fetchData();
  }, [route.params.productId]);
  //Zaczęta funkcja od dodawania produktu do koszyka
  const addToCart = () => {
    // Dodaj produkt do koszyka
    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    setCartItems([...cartItems, newCartItem]);
  };
  // const addReview = (review) => {
  //   // Dodaj opinię do recenzji
  //   setReviews([...reviews, review]);
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Price: {product.price} PLN</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      {/*<Button title="Add to Cart" onPress={addToCart} />*/}
      <View style={styles.reviewsContainer}>
        {/*<Text style={styles.reviewsTitle}>Product Reviews</Text>*/}
        {/*/!* Wyświetl opinie *!/*/}
        {/*{reviews.map((review, index) => (*/}
        {/*  <Text key={index} style={styles.reviewItem}>*/}
        {/*    {review}*/}
        {/*  </Text>*/}
        {/*))}*/}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  reviewsContainer: {
    marginTop: 16,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});
export default ProductDetailScreen;
