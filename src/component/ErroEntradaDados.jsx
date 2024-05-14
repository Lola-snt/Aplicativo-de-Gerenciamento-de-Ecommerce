import React from 'react';
import { View, Text, Button } from 'react-native';

const ErroEntradaDados = ({ mensagem }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{mensagem}</Text>
    {/* Inclua opções para corrigir o erro, se necessário */}
  </View>
);

export default ErroEntradaDados;

