// ProductsNavigator.tsx
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";  //stworzenie nawigacji stack
import ProductDetailScreen from '../Screens/ProductDetailScreen';  //ekran opisu produktu
import ProductsListScreen from '../Screens/ProductsListScreen';  //ekran listy produktów

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ekran produktów"
        component={ProductsListScreen}
        options={{ title: 'Produkty' }}
      />
      <Stack.Screen name="Ekran opisu produktu" component={ProductDetailScreen}/>
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
