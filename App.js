import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebase'


export default function App() {
  return(
    <View style={styles.container}>
      <Text>Ola mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36
  }
})



  // useEffect( () => {

  //   async function dados() {
      
  //     // Olheiro, Listener

  //     // await firebase.database().ref('nome').on('value', (snapshot) => {
  //     //   setNome(snapshot.val())
  //     // });

  //     // await firebase.database().ref('usuarios/3').on('value', (snapshot) => {
  //     //   setNome(snapshot.val().nome)
  //     //   setIdade(snapshot.val().idade)
  //     //   setProfissao(snapshot.val().profissao)
  //     // });

  //     // await firebase.database().ref('nome').once('value', (snapshot) => {
  //     //   setNome(snapshot.val())
  //     // })
  //   }

  //   dados()

  // }, [])


// criar um nó
      // await firebase.database().ref('tipo').set('treinador')

      // Remover um nó
      // await firebase.database().ref('tipo').remove();

      // Cria um child
      // await firebase.database().ref('usuarios').child(4).set({
      //   nome: 'Messi',
      //   idade: 35,
      //   profissao: 'Jogador de Futebol'
      // })

      // update em alguma propriedade
      // await firebase.database().ref('usuarios').child(3).update({
      //   nome: 'Neymar Jr.'
      // })


      //Componenete =====>
    //   export default function Listagem({ data }) {

    //     async function remover(){
    //         await firebase.database().ref('usuarios').child(data.key).remove()
    //         alert(`Usuário: ${data.nome} foi removido!`)
    //     }
    
    //     return(
    //         <View style={styles.container}>
    //             <View style={styles.conteudo}>
    //                 <Text>Nome: {data.nome}</Text>
    //                 <Text>Profissão: {data.profissao}</Text>
    //             </View>
    
    //             <View>
    //                 <TouchableOpacity onPress={ remover }>
    //                     <Ionicons name="close-circle-outline" size={24} color='red'/>
    //                 </TouchableOpacity>
    //             </View>
    
    //         </View>
    //     )
    // }