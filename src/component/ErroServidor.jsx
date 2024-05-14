import React from 'react';
import { View, Text, Button } from 'react-native';

const ErroServidor = ({ tentarNovamente }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Ocorreu um erro no servidor.</Text>
    <Button title="Tentar Novamente" onPress={tentarNovamente} />
  </View>
);

export default ErroServidor;
