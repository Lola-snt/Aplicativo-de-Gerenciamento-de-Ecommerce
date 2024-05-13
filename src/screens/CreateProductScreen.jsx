import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { createBook } from "../services/books";

export default function CreateBookScreen({ navigation }) {
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [editora, setEditora] = useState("")
  const [idioma, setIdioma] = useState("")
  const [paginas, setPaginas] = useState("")
  const [lancamento, setLancamento] = useState("")
  const [capa, setCapa] = useState("")
  const [descricao, setDescricao] = useState("")

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="NOME DO LIVRO"
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        placeholder="AUTOR DO LIVRO"
        style={styles.input}
        value={autor}
        onChangeText={setAutor}
      />
      <TextInput
        placeholder="EDITORA"
        style={styles.input}
        value={editora}
        onChangeText={setEditora}
      />
      <TextInput
        placeholder="N PAGINAS"
        style={styles.input}
        value={paginas}
        onChangeText={setPaginas}
      />
      <TextInput
        placeholder="IDIOMA"
        style={styles.input}
        value={idioma}
        onChangeText={setIdioma}
      />
      <TextInput
        placeholder="DATA LANCAMENTO"
        style={styles.input}
        value={lancamento}
        onChangeText={setLancamento}
      />
      <TextInput
        placeholder="CAPA"
        style={styles.input}
        value={capa}
        onChangeText={setCapa}
      />
      <TextInput
        placeholder="DESCRICAO"
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />
      <View styles={styles.footer}> 
        <Button
          title="ADICIONAR"
          onPress={() => {createBook({ 
            titulo, 
            autor, 
            editora, 
            idioma, 
            paginas,
            lancamento,
            capa,
            descricao });
            navigation.navigate('Produtos', {})}}
        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'col',
    alignContent: 'center',
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height: 50,
    backgroundColor: '#fff'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})