//Importing React Native stuff
import React from "react";
import { StyleSheet, ScrollView } from "react-native";

//Importing my own components
import CatElement from "./CatElement";

//Importing data
import CatData from "../assets/CatData";

export default function HomePage({ navigation }) {
  function navigateToHomePage() {
    navigation.navigate("Home");
  }

  function navigateToDetails(id) {
    //Alert.alert(`${id}`)
    navigation.navigate("CatPage", { id: id });
  }

  const cats = CatData.map((cat) => {
    return <CatElement key={cat.id} id={cat.id} image={cat.image} title={cat.title} description={cat.description} handlePressFunction={navigateToDetails} style={styles.catElement} />;
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {cats}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
  },

  catElement: {
    borderWidth: 3,
    borderColor: "red",
  },
});
