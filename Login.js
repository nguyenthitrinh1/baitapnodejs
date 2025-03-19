import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './useAuthor'; // Kiểm tra đường dẫn này
import MainStackNavigator from "./mainStack"
// Component CustomTextInput
const CustomTextInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

// Component IconButton
const IconButton = ({ icon, text, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.iconButton, { backgroundColor }]} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.iconButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

// Màn hình Đăng nhập (Sign In)
const LoginComponent = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Load dữ liệu đăng nhập đã lưu trong AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('email');
        const savedPassword = await AsyncStorage.getItem('password');
        if (savedEmail) setEmail(savedEmail);
        if (savedPassword) setPassword(savedPassword);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      }
    };
    loadData();
  }, []);

  // Xử lý đăng nhập và lưu dữ liệu vào AsyncStorage
  const { isLoggedIn, login } = useAuth();
  console.log("useAuth hook:", { isLoggedIn, login }); // Kiểm tra giá trị nhận được
  
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu!');
      return;
    }
    
    try {
      await login(email, password); // Gọi login để cập nhật trạng thái đăng nhập
  
      console.log("Dữ liệu đã lưu:", { email, password });
  
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'MainStack' }], // Đảm bảo điều hướng hợp lệ
        })
      );
  
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput value={email} onChangeText={setEmail} placeholder="Enter your email here!" />
      <CustomTextInput value={password} onChangeText={setPassword} placeholder="Enter your password here!" secureTextEntry />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtons}>
        <IconButton icon={require('./assets/google.png')} text="Google" backgroundColor="white" />
        <IconButton icon={require("./assets/facebook.png")} text="Facebook" backgroundColor="#4267B2" />
      </View>

      <Text style={styles.signUpText}>
        Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

// Màn hình Quên mật khẩu (Để trống, phát triển sau)
const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text>Coming soon...</Text>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  forgotText: {
    color: 'orange',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff6600',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    marginBottom: 15,
    fontSize: 14,
    color: '#555',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  iconButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
  },
  signUpLink: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

export { LoginComponent, ForgotPassword };
