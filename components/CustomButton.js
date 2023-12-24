import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";

export default function CustomButton({ handleClick, text }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity title="Proximo Gato" style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("screen").height,
  },

  button: {
    position: "absolute",
    width: "50%",
    textAlign: "center",
    backgroundColor: "#4222a5",
    borderWidth: 5,
    borderColor: "#4222a5",
    borderRadius: 20,
    marginHorizontal: "25%",
    height: 0.057 * Dimensions.get("screen").height,
    bottom: 0.04 * Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
