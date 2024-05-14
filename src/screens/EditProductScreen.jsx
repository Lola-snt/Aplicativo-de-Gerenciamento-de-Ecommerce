import { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { createBook, deleteBook, updateBook } from "../services/books";

export default function EditBookScreen({ route, navigation }) {
  const { book } = route.params;
  const [bookId, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");
  const [idioma, setIdioma] = useState("");
  const [paginas, setPaginas] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [capa, setCapa] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    setId(book.id);
    setTitulo(book.titulo);
    setAutor(book.autor);
    setEditora(book.editora);
    setIdioma(book.idioma);
    setPaginas(book.paginas);
    setLancamento(book.lancamento);
    setCapa(book.capa);
    setDescricao(book.descricao);
  }, []);

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateBook(bookId, {
            titulo,
            autor,
            editora,
            idioma,
            paginas,
            lancamento,
            capa,
            descricao,
          });
          navigation.navigate("Produtos", {});
        }}
      >
        <Text style={{ color: "white", fontWeight: 900, fontSize: 18 }}>
          EDITAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          deleteBook(bookId);
          navigation.navigate("Produtos", {});
        }}
      >
        <Text style={{ color: "white", fontWeight: 900, fontSize: 18 }}>
          DELETAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingStart: 10,
  },
  button: {
    backgroundColor: "#32BC68",
    height: 60,
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button2: {
    backgroundColor: "#32BC68",
    height: 60,
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
