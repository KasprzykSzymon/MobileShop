// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen'; // Importuje ekran domowy
// import SearchScreen from './SearchScreen' // Importuje ekran szukania produktu
// import CartScreen from './CartScreen'; // Importuje ekran domowy
import ProfileNavigation from './ProfileNavigation'; // Importuje nawigacje profilową z jej ekranami

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/*<Tab.Screen name="Search" component={SearchScreen} />*/}
        {/*<Tab.Screen name="Cart" component={CartScreen} />*/}
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
