import { useState } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CreateBookScreen({navigation}) {
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [idioma, setIdioma] = useState("")
    const [paginas, setPaginas] = useState("")
    const [lancamento, setLancamento] = useState("")
    const [capa, setCapa] = useState("")

return (
    <View>
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
    </View>
      )
}