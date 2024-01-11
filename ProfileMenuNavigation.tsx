// ProfileNavigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileMenuScreen from './Screens/ProfileMenuScreen';
// import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
// import AddProductScreen from "./Screens/AddProductScreen";

const Stack = createStackNavigator();
const ProfileMenuNavigation = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="ProfileMenu" component={ProfileMenuScreen} />
      {/*<Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />*/}
      {/*<Stack.Screen name="AddProduct" component={AddProductScreen} />*/}
    </Stack.Navigator>
  );
};
export default ProfileMenuNavigation;
