import React from 'react';
import { View, Text, Button } from 'react-native';

const ErroAutenticacao = ({ tentarNovamente }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Ocorreu um erro de autenticação.</Text>
    <Button title="Tentar Novamente" onPress={tentarNovamente} />
  </View>
);

export default ErroAutenticacao;
