import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import ProfileMenuScreen from "./Screens/ProfileMenuScreen";
import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
import AddProductScreen from "./Screens/AddProductScreen";
// import CameraComponent from "./Screens/CameraComponent";


const Stack = createStackNavigator();

const ProfileNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Ekran profilu" component={ProfileScreen} />
            <Stack.Screen name="Ekran logowania" component={LoginScreen} />
            <Stack.Screen name="Ekran rejestracji" component={RegistrationScreen} />
          <Stack.Screen
            name="Menu profilu"
            component={ProfileMenuScreen}
            options={{ headerLeft: () => null, }}// Ukryj przycisk powrotu
          />
          <Stack.Screen name="Ekran zmiany hasła" component={ChangePasswordScreen} />
          <Stack.Screen name="Ekran dodania produktu" component={AddProductScreen} />
          {/*<Stack.Screen name="Ekran aparatu" component={CameraComponent} />*/}
        </Stack.Navigator>
    );
};
export default ProfileNavigation;

