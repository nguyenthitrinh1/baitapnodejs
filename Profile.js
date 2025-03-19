import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from './useAuthor';

const ProfileComponent = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.username}>{user?.username || 'Guest'}</Text>
      <Text style={styles.role}>Mobile Developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native
      </Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  header: { width: '100%', height: 100, backgroundColor: '#0099ff', marginBottom: 20 },
  username: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  role: { color: 'blue', marginBottom: 10 },
  description: { textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#ff6600', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default ProfileComponent;
