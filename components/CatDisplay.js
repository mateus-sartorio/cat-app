import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

export default function CatDisplay({ catImage, catBreed = "Generic Cat Breed" }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={catImage} resizeMode="cover" style={styles.imageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e04dbc",
    height: "60%",
  },

  imageStyle: {
    height: "100%",
  },
});
