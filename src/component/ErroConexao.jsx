import React from 'react';
import { View, Text, Button } from 'react-native';

const ErroConexao = ({ tentarNovamente }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Ocorreu um erro de conexão.</Text>
    <Button title="Tentar Novamente" onPress={tentarNovamente} />
  </View>
);

export default ErroConexao;
