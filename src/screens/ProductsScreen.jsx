import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button, StyleSheet } from "react-native";
import { createBook, getAllBook, deleteBook, updateBook } from "../services/books";
import { styles } from "./ProductScreen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ProductsScreen({navigation}) {
  const colors = ['#e0e0e0','#FFF'];

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
    <View style={{flex:1}}>
      <FlatList
        data={allBook}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback 
            onPress={ () => navigation.navigate('Detalhes', {bookId: item.id})}
            style = {{backgroundColor: colors[index % colors.length]}}>
          <View style={{flex:1, flexDirection: 'row' }}>
            <View style={{width: '80%'}}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.autor}</Text>
            </View>
          </View>
          </TouchableWithoutFeedback>
        )}
      />
      <View style={styles.footer}>
        <Button 
          title="ADICIONAR"
          onPress={() => navigation.navigate(`Adicionar`, {})}
          />
      </View>
    </View>
  );
}
