import React from "react";

import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function GroupMembers({ navigation }) {
  return (
    <View style={style.style3}>
      <View style={style.style4}>
        <Text style={style.style10}>Nosso Time</Text>
      </View>

      <View style={style.style2}>
        <TouchableOpacity
          style={style.style1}
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/lorrayne-santana/")
          }
        >
          <View style={style.style6}>
            <Image
              source={require("../../assets/Perfil_Pictures/lorrayne.jpg")}
              style={style.style8}
            />
          </View>

          <View style={style.style7}>
            <Text style={style.style9}>Lorrayne Santana</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.style1}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/pedro-azevedo-92646717a/"
            )
          }
        >
          <View style={style.style6}>
            <Image
              source={require("../../assets/Perfil_Pictures/pedro.jpeg")}
              style={style.style8}
            />
          </View>
          <View style={style.style7}>
            <Text style={style.style9}>Pedro Azevedo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.style1}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/miguel-milagres-b2bb0b204/"
            )
          }
        >
          <View style={style.style6}>
            <Image
              source={require("../../assets/Perfil_Pictures/miguel.jpg")}
              style={style.style8}
            />
          </View>

          <View style={style.style7}>
            <Text style={style.style9}>Miguel Milagres</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.style1}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/j%C3%BAlia-cordeoli-a0b7a82b7/"
            )
          }
        >
          <View style={style.style6}>
            <Image
              source={require("../../assets/Perfil_Pictures/julia.jpg")}
              style={style.style8}
            />
          </View>

          <View style={style.style7}>
            <Text style={style.style9}>Júlia Cordeoli</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.style1}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/kayky-fernando-31368217a/"
            )
          }
        >
          <View style={style.style6}>
            <Image
              source={require("../../assets/Perfil_Pictures/kayky.jpg")}
              style={style.style8}
            />
          </View>

          <View style={style.style7}>
            <Text style={style.style9}>Kayky Fernando</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.style1}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/raphael-esch-5a245346/"
            )
          }
        >
          <View style={style.style6}>
            <Image
              source={require("../../assets/Perfil_Pictures/raphael.jpg")}
              style={style.style8}
            />
          </View>

          <View style={style.style7}>
            <Text style={style.style9}>Raphael Esch</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    width: "35%",
    height: "24%",
    justifyContent: "space-between",
  },
  style2: {
    flex: 0.8,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 35,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  style3: {
    backgroundColor: "#292929",
    flex: 1,
  },
  style4: {
    flex: 0.1,

    alignItems: "center",
    justifyContent: "center",
  },
  style5: {
    flex: 0.1,

    justifyContent: "center",
    alignItems: "center",
  },
  style6: {
    borderRadius: 100,
    height: "100%",
  },
  style7: {
    height: "24%",
    alignItems: "center",
  },
  style8: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  style9: {
    color: "#f1f1f1",
    fontSize: 15,
  },
  style10: {
    color: "#f1f1f1",
    fontSize: 30,
    fontWeight: "bold",
  },
  style11: {
    width: "35%",
    height: "65%",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
  },
  style12: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
