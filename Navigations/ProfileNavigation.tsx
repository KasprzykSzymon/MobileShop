//ProfileNavigation.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen'; //ekran wyboru logowania się i rejestracji
import LoginScreen from '../Screens/LoginScreen';     //ekran logowania
import RegistrationScreen from '../Screens/RegistrationScreen';  //ekran rejestracji
import ProfileMenuScreen from "../Screens/ProfileMenuScreen";     //ekran menu po zalogowaniu
import ChangePasswordScreen from "../Screens/ChangePasswordScreen";  //ekran zmiany hasła dla użytkownika
import AddProductScreen from "../Screens/AddProductScreen";     //ekran dodawania produktu
// import CameraComponent from "./Screens/CameraComponent";     //próba ekranu dodającego sensor kamery
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

