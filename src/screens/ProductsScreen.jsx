import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableWithoutFeedback
} from "react-native";
import { getAllBook } from "../services/books";
import { styles } from "./ProductScreen";



export default function ProductsScreen({ navigation }) {
  const colors = ['#e0e0e0', '#FFF'];

  const [allBook, setAllBook] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    fetch()
  }, []);

  const fetch = async () => {
    const data = await getAllBook();
    console.log(data);
    setAllBook(data);
  };

  useEffect(() => {
    
    fetch();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} />
        }>
        <FlatList
          data={allBook}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Detalhes', { bookId: item.id })}
              style={{ backgroundColor: colors[index % colors.length] }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: '80%' }}>
                  <Text style={{ fontSize: 30 }}>{item.titulo}</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}
