import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';

import firebase from '../../firebase';



export default function Login({ changeStatus }) {

    const [type, setType] = useState('login')

    const [email, setEmai] = useState('')
    const [password, setPassword] = useState('')


    function handleLogin() {
        
      if (type === 'login') {
        // LOGIN DE USUARIO

        const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((error) => {
          console.log(error)
          alert('Ops! algo deu errado')
        })
        return

      } else {
        //CADASTRO DE USUARIO

        const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((error) => {
          console.log(error)
          alert('Ops! parece que deu algum erro')
        })
        return
      }

    }

  return(
    <SafeAreaView style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Seu email'
      value={email}
      onChangeText={ (text) => setEmai(text) }
      />

      <TextInput 
      style={styles.input}
      placeholder='*********'
      value={password}
      onChangeText={ (text) => setPassword(text) }
      />

      <TouchableOpacity 
      style={[styles.btnAcessar, { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' } ]}
      onPress={ handleLogin }
      >
        <Text style={styles.textBtn}>
          { type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:56}} 
      onPress={() => setType(type => type === 'login' ? 'Cadastrar' : 'login' )}
      >

        <Text style={{textAlign: 'center'}}>
          {type === 'login' ? 'Criar uma conta' : 'Já Possuo uma conta'}
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#FFFAFA',
    marginTop: 72
  },
  input: {
    height: 56,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#141414',
    borderRadius: 28,
    padding: 16,
    marginBottom: 16
  },
  btnAcessar: {
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginBottom: 16
  },
  textBtn: {
    color: '#FFF',
    fontSize: 18
  }

})