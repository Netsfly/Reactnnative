import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function NavigationScreen() {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => router.replace("/")} />
      <Button title="Explore" onPress={() => router.replace("/explore")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});