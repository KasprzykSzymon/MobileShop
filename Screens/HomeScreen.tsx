// HomeScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getAllItems, getAllUsers } from '../database';

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

  const refreshData = async () => {
    const allItems = await getAllItems();
    const allUsers = await getAllUsers();
    setItems(allItems);
    setUsers(allUsers);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refreshData();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <View>
      <Text>SQLite Database Example</Text>
      <Text>Items from Database:</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <Text>Users from Database:</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Username: {item.username}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
