//Importing React Native stuff
import React, {useState} from "react"
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Dimensions, Touchable } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'



export default function CatElement( {id, image, title, description, handlePressFunction} ) {
    const fullHeart = require("../assets/Cat_Images/Full_Heart.png")
    const emptyHeart = require("../assets/Cat_Images/Empty_Heart.png")

    const [heart, setHeart] = useState(emptyHeart)

    function handleClick() {
        setHeart( prevHeart => {
            if(prevHeart === fullHeart)
                return emptyHeart
            else
                return fullHeart
        })
    }

    return (
        <TouchableOpacity
            style = {styles.container}
            onPress = {() => handlePressFunction(id)}
        >

            <Image
                source = {image}
                style = {styles.image}
            />

            <Text style = {styles.text}>{title}</Text>

            <TouchableOpacity
                style = {styles.button}
                onPress = {handleClick}
            >
                <Image
                    source = {heart}
                    style = {styles.iconImage}
                />
            </TouchableOpacity>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 0.4 * Dimensions.get('screen').height,
      borderWidth: 2,
      borderColor: 'black',
      padding: 0
    },

    image: {
        //resizeMode: 'center',
        width: Dimensions.get('screen').width,
        maxHeight: 0.4 * Dimensions.get('screen').height,
        //height: 0.4 * Dimensions.get('screen').height,
        marginTop: 0,
        // borderWidth: 1,
        // borderColor: 'red',
        // backgroundColor: 'red',
        paddingTop: 0,
        
    },

    text: {
        fontWeight: "bold",
        fontSize: 20,
        position: 'absolute',
        bottom: "2%",
        left: "3%",

    },

    button: {
        position: 'absolute',
        bottom: "2%",
        right: "3%",
        width: 0.15 * Dimensions.get('screen').width,
        height: 0.15 * Dimensions.get('screen').width,
        
    },

    iconImage: {
        width: "100%",
        height: "100%",
    }
})
