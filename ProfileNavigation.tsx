// ProfileNavigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import ProfileMenuNavigation from './ProfileMenuNavigation';

const Stack = createStackNavigator();
const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="ProfileMenuNavigation" component={ProfileMenuNavigation} />
    </Stack.Navigator>
  );
};
export default ProfileNavigation;

