import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CatDescription({ title = "Generic Cat", description = "Generic description of an generic cat." }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    paddingTop: 0,
    width: "90%",
    alignContent: "center",
    marginHorizontal: "5%",
  },

  title: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 27,
    paddingBottom: 10,
  },

  description: {
    color: "#495057",
    textAlign: "center",
    fontSize: 16,
  },
});
