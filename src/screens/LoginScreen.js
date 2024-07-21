import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const normalizedUserId = userId.toLowerCase();
    if (normalizedUserId === "driver" && password === "alan123") {
      navigation.navigate("Driver");
    } else if (normalizedUserId === "developer" && password === "jomal123") {
      navigation.navigate("Developer");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User ID:</Text>
      <TextInput style={styles.input} value={userId} onChangeText={setUserId} />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
