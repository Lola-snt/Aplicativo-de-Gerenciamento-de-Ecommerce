import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Image source={require("#")} style={styles.image} />
        <Text style={styles.title}>Título do livro</Text>
        <Text style={styles.author}>Autor do livro</Text>
      </View>
      <View style={styles.secondArea}>
        <View style={styles.additionalData}>
          <View style={styles.data}>
            <Text style={styles.info}>200</Text>
            <Text style={styles.subtitle}>Páginas</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.info}>Português</Text>
            <Text style={styles.subtitle}>Idioma</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.info}>2024</Text>
            <Text style={styles.subtitle}>Lançamento</Text>
          </View>
        </View>
        <View>
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={styles.description}
          >
            Lorem ipsum dolor sit amet. Qui saepe pariatur ad internos earum ut
            libero eius eum velit voluptas. Qui atque dignissimos non voluptatum
            dolorum est laudantium magnam non eveniet quasi. In Quis alias sed
            voluptates nulla et internos voluptates et enim provident ab
            nesciunt illum eum eius error in necessitatibus molestias. Ut modi
            nemo aut eaque voluptas nam dolore quos est nihil doloribus qui
            sequi galisum rem distinctio dignissimos. Ut autem dolore aut
            officia debitis eum nihil iure sed quam doloribus qui consequatur
            dicta sit animi culpa. Est fugit tempora et velit reiciendis est
            internos necessitatibus qui modi consectetur qui internos fugiat sit
            praesentium harum. Aut exercitationem laborum et illum ipsum a ipsam
            voluptatem sed maxime molestiae sed enim praesentium.
          </Text>
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
