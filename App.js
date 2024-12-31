import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.text}>Nhập số điện thoại</Text>
      <Text style={styles.text1}> Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput
      style={styles.input}
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Tiếp tục </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,

  },
 text:{
    fontSize:18,
    marginBottom:20,

  },
  text1:{
    fontSize:16,
    marginBottom:20,
  },
  input:{
    height:50,
    marginBottom:20,
  },
  button :{
    backgroundColor:'#4CAF50',
    marginBottom:20,
  },
});

