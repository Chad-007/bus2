import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";

const DeveloperScreen = () => {
  const [busName, setBusName] = useState("");
  const [busList, setBusList] = useState([]);

  const addBus = () => {
    setBusList([...busList, { key: busName }]);
    setBusName("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={busName}
        onChangeText={setBusName}
        placeholder="Enter new bus name"
      />
      <Button title="Add Bus" onPress={addBus} />
      <FlatList
        data={busList}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default DeveloperScreen;
