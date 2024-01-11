// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Screens/HomeScreen'; // Importuje ekran domowy
import DatabaseScreen from "./Screens/DatabaseScreen";
import ProfileNavigation from './ProfileNavigation'; // Importuje nawigacje profilową z jej ekranami

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Database" component={DatabaseScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
