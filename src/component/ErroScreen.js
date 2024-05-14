import React from 'react';
import { View, Text, Button } from 'react-native';

const ErroScreen = ({ mensagem, onTentarNovamente }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{mensagem}</Text>
    {onTentarNovamente && (
      <Button title="Tentar Novamente" onPress={onTentarNovamente} />
    )}
  </View>
);

export default ErroScreen;
