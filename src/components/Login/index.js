import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';



export default function Login() {
    const [email, setEmai] = useState('')
    const [password, setPassword] = useState('')


    function logar() {
        
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
      style={styles.btnAcessar}
      onPress={ logar }
      >
        <Text style={styles.textBtn}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:56}}>
        <Text style={{textAlign: 'center'}}>Criar um conta</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#FFFAFA',
    justifyContent: 'center'
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
    backgroundColor: '#141414',
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