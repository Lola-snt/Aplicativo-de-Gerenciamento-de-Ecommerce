import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { getAllBook } from "../services/books";

const imagem = "../../assets/livro2.jpg";

export default function ProductsScreen({ navigation }) {
  const colors = ["#e0e0e0", "#FFF"];

  const [allBook, setAllBook] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getAllBook();
      setAllBook(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{ marginTop: 20 }}
        >
          <FlatList
            data={allBook}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Detalhes", { bookId: item.id })
                }
              >
                <View style={styles.container}>
                  <View style={styles.box}>
                    <Image source={{ uri: item.capa }} style={styles.image} />
                    <View>
                      <Text style={styles.title}>{item.titulo}</Text>
                      <Text style={styles.author}>{item.autor}</Text>
                    </View>
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
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    width: "60%",
    marginBottom: 12,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scrollView: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    height: 110,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: "25%",
    height: "80%",
    backgroundColor: "#F6F8F9",
    borderRadius: 10,
    marginHorizontal: 15,
  },
  title: {
    fontWeight: "900",
    fontSize: 18,
  },
  author: {
    fontSize: 14,
    color: "gray",
  },
});
