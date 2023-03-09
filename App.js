
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={aparencia.view_principal}>
      <Text style={aparencia.titulo}>meu aplicativo..</Text>
      <View style={aparencia.box_subTitulo}>
    <Text>odeio minha vidaaaa</Text>
    </View>
    </View>
  );
}

const aparencia = StyleSheet.create(

{
view_principal:{
backgroundColor: 'rgba(255, 33, 55, 0.30)',
flex:1,
alignItems: 'center',
justifyContent: 'center',

},


titulo:{

  fontSize:30, 
  color: '#FFF', 
  fontWeight: 'bold'
},

box_subTitulo:{
width: '80%',
backgroundColor: '#f1f1f1',
padding: 20,
marginTop: 50,
borderTopRightRadius: 50,
borderBottomLeftRadius: 50,
alignItems: 'center',
justifyContent: 'center',
fontWeight: 'bold'
}
}


);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
