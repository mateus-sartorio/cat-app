//Import of ususal React-Native stuff
import React from "react";
import { StyleSheet, View } from "react-native";

//Imports of custom components
import CatDescription from "./CatDescription";
import CatDisplay from "./CatDisplay";
import CustomButton from "./CustomButton";

//Importing other stuff
import CatData from "../assets/CatData";

function CatPage({ navigation, route }) {
  const { image, title, description } = CatData[route.params.id];

  return (
    <View style={styles.container}>
      <CatDisplay catImage={image} catBreed="Black Cat" />

      <CatDescription title={title} description={description} />

      <CustomButton handleClick={() => navigation.navigate("Home")} text="Go back" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
});

export default CatPage;
