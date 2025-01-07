import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

const App=()=>{
  return (
    <View>
      <TextInput
        style={{
          height:50,
          borderColor:'green',
          borderWidth:,
        }}
        defaultValue='Hello, world'
      />
    </View>
  )

}
export default App;