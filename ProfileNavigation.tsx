import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import ProfileMenuScreen from "./Screens/ProfileMenuScreen";
import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
import AddProductScreen from "./Screens/AddProductScreen";


const Stack = createStackNavigator();

const ProfileNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen
            name="ProfileMenu"
            component={ProfileMenuScreen}
            options={{ headerLeft: () => null, }}// Ukryj przycisk powrotu
          />
          <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
          <Stack.Screen name="AddProduct" component={AddProductScreen} />
        </Stack.Navigator>
    );
};
export default ProfileNavigation;

