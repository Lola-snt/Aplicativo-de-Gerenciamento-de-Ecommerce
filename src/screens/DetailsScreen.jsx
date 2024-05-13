import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { getBook } from "../services/books";

export default function DetailsScreen({route, navigation}) {
  console.log(route)
  const {bookId} = route.params;
  const [book, setBook] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const data = await getBook(bookId);
      console.log(data);
      setBook(data);
    };
    fetch();
  }, {});

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Image source={book.capa} style={styles.image} />
        <Text style={styles.title}>{book.titulo}</Text>
        <Text style={styles.author}>{book.autor}</Text>
      </View>
      <View style={styles.secondArea}>
        <View style={styles.additionalData}>
          <View style={styles.data}>
            <Text style={styles.info}>{book.paginas}</Text>
            <Text style={styles.subtitle}>Páginas</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.info}>{book.idioma}</Text>
            <Text style={styles.subtitle}>Idioma</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.info}>{book.lancamento}</Text>
            <Text style={styles.subtitle}>Lançamento</Text>
          </View>
        </View>
        <View>
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={styles.description}
          >
           {book.descricao}
          </Text>
        </View>
        <View>
        <Button
              title="EDITAR"
              onPress={() => {}}
            />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "8%",
  },
  area: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
  secondArea: {
    flex: 1,
    width: "100%",
  },
  image: {
    resizeMode: "contain",
    width: "50%",
    height: "66%",
    backgroundColor: "white",
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "900",
  },
  author: {
    fontSize: 18,
    fontWeight: "500",
    color: "gray",
  },
  additionalData: {
    flexDirection: "row",
    height: "30%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    fontWeight: "900",
    fontSize: 20,
  },
  subtitle: {
    fontWeight: "500",
    fontSize: 16,
    color: "gray",
  },
  description: {
    textAlign: "justify",
  },
});
