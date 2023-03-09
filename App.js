
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={aparencia.view_principal}>
      <Text style={aparencia.titulo}>meu aplicativo..</Text>
      <View style={aparencia.box_subTitulo}>
    <Text>odeio minha vidaaaa</Text>
    </View>
   
      <Image
       source={{uri:'https://upload.wikimedia.org/wikipedia/pt/a/aa/Bart_Simpson_200px.png'}}
       style={aparencia.teste_imagem}

      />
  
    </View>
  );
}

const aparencia = StyleSheet.create(

{
teste_imagem:{
  width:100,
  height:100,
  marginTop: 50


  },


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
