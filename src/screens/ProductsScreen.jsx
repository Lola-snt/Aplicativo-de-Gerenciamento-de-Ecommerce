import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import { createBook, getAllBook, deleteBook, updateBook } from "../services/books";
import { styles } from "./ProductScreen"

export default function ProductsScreen() {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");

  const [allBook, setAllBook] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllBook();
      console.log(data);
      setAllBook(data);
    };
    fetch();
  }, []);

  return (
    <View>
      <Text>LIVROS</Text>
      <TextInput
        placeholder="NOME DO LIVRO"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
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
      <Button
        title="ADICIONAR"
        onPress={() => createBook({ title, autor, editora })}
      />

      <FlatList
        data={allBook}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.autor}</Text>
            <Text />
            <Button
              title="DELETAR LIVRO"
              onPress={() => deleteBook(item.id)}
            />
            <TextInput
              placeholder="NOME DO LIVRO"
              style={styles.input}
              value={title}
              onChangeText={setTitle}
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
            <Button
              title="EDITAR LIVRO"
              onPress={() => updateBook(item.id, title, autor, editora)}
            />
          </View>
        )}
      />
    </View>
  );
}

/*  */