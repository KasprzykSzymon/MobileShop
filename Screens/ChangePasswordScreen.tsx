// ChangePasswordScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import db from '../database';

const ChangePasswordScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = async () => {
        if (username.trim() !== '' && currentPassword.trim() !== '' && newPassword.trim() !== '') {
            const user = await db.getUserByUsername(username);

            if (user) {
                // User found, now verify current password
                const passwordMatch = await db.verifyPassword(currentPassword, user.hashedPassword);

                if (passwordMatch) {
                    // Current password is correct, proceed with changing the password
                    const result = await db.updateUserPassword(user.id, newPassword);

                    if (result.rowsAffected > 0) {
                        Alert.alert('Success', 'Password changed successfully.');
                        navigation.navigate('Login');
                    } else {
                        Alert.alert('Error', 'Failed to change password. Please try again.');
                    }
                } else {
                    Alert.alert('Error', 'Current password is incorrect.');
                }
            } else {
                Alert.alert('Error', 'User not found.');
            }
        } else {
            Alert.alert('Error', 'Please fill in all fields.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Change Password</Text>
            <Text>Username:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <Text>Current Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter current password"
                secureTextEntry
                value={currentPassword}
                onChangeText={(text) => setCurrentPassword(text)}
            />

            <Text>New Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter new password"
                secureTextEntry
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
            />

            <Button title="Change Password" onPress={handleChangePassword} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
    },
});

export default ChangePasswordScreen;
