// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //Pobranie nawigacji
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import HomeScreen from './Screens/HomeScreen';           //ekran podglądu urzytkowników i produktów
// import DatabaseScreen from './Screens/DatabaseScreen';   //ekran do resetu bazy danych
import ProfileNavigation from './Navigations/ProfileNavigation'; //Nawigacja Profilu
import ProductsNavigator from './Navigations/ProductsNavigation'; //Nawigacja Produktu
import { UserProvider } from './UserContext';                     //Implementacja sprawdzania użytkownika

const Tab = createMaterialBottomTabNavigator(); //implementacja nawigacji
const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Produkty" component={ProductsNavigator} />
          {/*<Tab.Screen name="Baza Danych" component={DatabaseScreen} />*/}
          {/*<Tab.Screen name="Użytkownicy i Produkty" component={HomeScreen} />*/}
          <Tab.Screen name="Ekran Profilu" component={ProfileNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>

  );
};
export default App;
