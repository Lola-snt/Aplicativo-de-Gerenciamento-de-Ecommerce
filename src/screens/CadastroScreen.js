

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';

const CadastroScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        // Cadastro bem-sucedido
        const user = userCredential.user;
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Erro', errorMessage);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10 }}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10 }}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroScreen;
