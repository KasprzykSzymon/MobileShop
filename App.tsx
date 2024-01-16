// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Screens/HomeScreen'; // Importuje ekran domowy
import DatabaseScreen from './Screens/DatabaseScreen';
import ProfileNavigation from './ProfileNavigation'; // Importuje nawigacje profilową z jej ekranami
import ProductsNavigator from './ProductsNavigation';
import { UserProvider } from './UserContext';

const Tab = createMaterialBottomTabNavigator();


const App = () => {

  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Produkty" component={ProductsNavigator} />
          <Tab.Screen name="Baza Danych" component={DatabaseScreen} />
          <Tab.Screen name="Strona Domowa" component={HomeScreen} />
          <Tab.Screen name="Ekran Profilu" component={ProfileNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>

  );
};

export default App;
