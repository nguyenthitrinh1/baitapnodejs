import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from './text'; // Chỉ cần useAuth, không cần AuthProvider

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (username.trim()) {
      login({ username });
    } else {
      alert("Please enter your username!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#999999',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: '#ff6600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default LoginComponent;
