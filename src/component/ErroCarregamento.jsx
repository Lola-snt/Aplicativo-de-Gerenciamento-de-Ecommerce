import React from 'react';
import { View, Text, Button } from 'react-native';

const ErroCarregamento = ({ tentarNovamente }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Ocorreu um erro ao carregar os dados.</Text>
    <Button title="Tentar Novamente" onPress={tentarNovamente} />
  </View>
);

export default ErroCarregamento;
