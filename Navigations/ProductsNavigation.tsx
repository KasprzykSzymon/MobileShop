// AppNavigator.tsx
import React from 'react';
import ProductsListScreen from './Screens/ProductsListScreen';
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from  './Screens/ProductDetailScreen';

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
