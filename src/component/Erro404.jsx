import React from 'react';
import { View, Text, Button } from 'react-native';

const Erro404 = ({ voltarPaginaInicial }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>A página solicitada não foi encontrada.</Text>
    <Button title="Voltar para a Página Inicial" onPress={voltarPaginaInicial} />
  </View>
);

export default Erro404;
