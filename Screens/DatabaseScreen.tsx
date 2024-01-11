// DatabaseScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { initDatabase, addItem, getAllItems, getAllUsers, deleteUser, clearDatabase } from '../database';

const DatabaseScreen = () => {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    initDatabase();
    refreshData();
  }, []);

  const refreshData = async () => {
    const allItems = await getAllItems();
    const allUsers = await getAllUsers();
    setItems(allItems);
    setUsers(allUsers);
  };

  const handleAddItem = async () => {
    // Dodaj nowy element do bazy danych
    console.log("Dodano produkt")
    await addItem('New Item');
    refreshData();
  };

  const handleClearDatabase = async () => {
    // Usuń wszystkich użytkowników
    const allUsers = await getAllUsers();
    allUsers.forEach(async (user) => {
      await deleteUser(user.id);
    });

    // Odśwież dane po wyczyszczeniu bazy
    refreshData();
  };

  return (
    <View>
      <Button title="Add Item" onPress={handleAddItem} />
      <Button title="handle Clear Database" onPress={handleClearDatabase} />


      <Button title="Clear Database" onPress={clearDatabase} />
    </View>
  );
};

export default DatabaseScreen;
