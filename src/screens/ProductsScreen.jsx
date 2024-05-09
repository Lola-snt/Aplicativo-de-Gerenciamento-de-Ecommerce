import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getAllTasks } from "../services/getAllTasks";

export default function ProductsScreen() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllTasks();
      setAllTasks(data);
    };
    fetch();
  }, []);

  return (
    <View>
      <Text>PRODUTOS</Text>
      <FlatList
        data={allTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.autor}</Text>
            <Text>{item.editora}</Text>
            <Text />
          </View>
        )}
      />
    </View>
  );
}
