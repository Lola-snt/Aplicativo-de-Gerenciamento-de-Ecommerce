import React from 'react';
import { View, Text, Button } from 'react-native';

const ErroExcecao = ({ relatarErro }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Ocorreu um erro inesperado.</Text>
    <Button title="Relatar Erro" onPress={relatarErro} />
  </View>
);

export default ErroExcecao;
