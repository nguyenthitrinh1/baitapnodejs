import React from 'react';
import Login from './bai6';
// import {Text, View,TouchableOpacity ,StyleSheet} from 'react-native';
// const App= ()=>{
//     const [mau,setMau]=useState('white');
//     const colors = ['green', 'blue', 'brown', 'yellow', 'red', 'black'];

//   return (
//     <View style={[styles.container, { backgroundColor: mau }]}>
//       {colors.map((color) => (
//         <TouchableOpacity 
//           key={color} 
//           style={[styles.button, { backgroundColor: color }]}
//           onPress={() => setMau(color)}
//         >
//           <Text style={styles.text}>{color.toUpperCase()}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   button: {
//     width: '80%',
//     padding: 15,
//     marginVertical: 5,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   text: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


function App(){
  return(
    <div>
       <Login />
    </div>
   
  );
}
export default App;