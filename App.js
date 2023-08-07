import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  ActivityIndicator, 
  SafeAreaView, 
  TouchableOpacity ,
  Keyboard
} 
from 'react-native';

import TaskList from './src/components/TaskList';

import firebase from './src/firebase'
import Login from './src/components/Login';


export default function App() {
  const[user, setUser] = useState(null)
  const[newTask, setNewTask] = useState('')
  const[tasks, setTasks] = useState([])


  function handleDelete(key) {
    console.log(key)
  }

  function handleEdit(data) {
    console.log('item cliclado', data)
  }

  function handleAdd() {
    if(newTask === '') {
      return
    }

    let tarefas = firebase.database().ref('tarefas').child(user)
    let chave = tarefas.push().key

    tarefas.child(chave).set({
      terefa: newTask
    })
    .then( () => {
      console.log('TAREFA CRIADA')

      const data = {
        key: chave,
        tarefa: newTask
      }
      setTasks(oldTasks => [...oldTasks, data])
    })
    Keyboard.dismiss();
    setNewTask('')



  }

  if(!user) {
    return <Login changeStatus={(user) => setUser(user) } />
  }

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.containerInput}>
        <TextInput
        style={styles.input}
        placeholder='Sua tarefa aqui'
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
        />

        <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
      data={tasks}
      keyExtractor={ item => item.key }
      renderItem={ ({ item }) => (
        <TaskList data={item} deleteItem={ handleDelete } editItem={ handleEdit } />
      )}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 72,
    paddingHorizontal: 12,
    backgroundColor: '#FFFAFA'
  },
  containerInput: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    marginBottom: 24,
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 48,
  },
  btnAdd: {
    height: 48,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    paddingHorizontal: 16,
    borderRadius: 4
  },
  btnText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
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