// database.js
import SQLite from 'react-native-sqlite-storage';

// Otwórz połączenie z bazą danych
const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => console.log('Database opened'),
  error => console.error('Error opening database', error)
);
// Inicjalizacja bazy danych
const initDatabase = () => {
  db.transaction(tx => {
    // jeżeli chcesz usunąć bazę danych przedmiotów
    // tx.executeSql('DROP TABLE IF EXISTS items');
    tx.executeSql(
      //Trorzy w bazie danych miejsce na przedmioty
      'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, name TEXT, price REAL, description TEXT)',
    );
    //jeżeli chcesz usunąć bazę danych użytkowniktów
    // tx.executeSql('DROP TABLE IF EXISTS users');
    tx.executeSql(
      //Trorzy w bazie danych miejsce na użytkowniktów
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT)'
    );
  });
};
// Dodaj element do bazy danych
const addItem = (userId, name, price, itemDescription) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO items (user_id, name, price, description) VALUES (?, ?, ?, ?)',
        [userId, name, price, itemDescription],
        (_, results) => {
          resolve(results.insertId);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM items WHERE id = ?',
        [productId],
        (_, results) => {
          const product = results.rows.raw()[0];
          resolve(product);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
// Pobierz wszystkie elementy z bazy danych
const getAllItems = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM items',
        [],
        (_, results) => {
          resolve(results.rows.raw());
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
// Aktualizuj element w bazie danych
const updateItem = (id, name) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE items SET name = ? WHERE id = ?',
        [name, id],
        (_, results) => {
          resolve(results.rowsAffected);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
// Usuń element z bazy danych
const deleteItem = id => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM items WHERE id = ?',
        [id],
        (_, results) => {
          resolve(results.rowsAffected);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
const addUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password],
        (_, results) => {
          resolve(results.insertId);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (_, results) => {
          resolve(results.rows.raw());
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
const updateUserPassword = async (userId, newPassword) => {
  try {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql('UPDATE users SET password = ? WHERE id = ?', [newPassword, userId], (_, results) => {
          resolve(results.rowsAffected);
        }, error => {
          reject(error);
        });
      });
    });
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
};
const updateUser = (id, username, email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
        [username, email, password, id],
        (_, results) => {
          resolve(results.rowsAffected);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
const deleteUser = id => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM users WHERE id = ?',
        [id],
        (_, results) => {
          resolve(results.rowsAffected);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
const clearDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Items; DELETE FROM users;',
        [],
        (_, results) => {
          resolve(results);
        },
        error => {
          reject(error);
        }
      );
    });

  });
};
const getUserByUsername = (username, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (_, results) => {
          resolve(results.rows.raw()[0]); // Return the first user (there should be at most one)
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
export { initDatabase, addItem, getProductById, getAllItems, updateItem, deleteItem, addUser, getAllUsers, updateUserPassword, updateUser, deleteUser, clearDatabase, getUserByUsername  };
