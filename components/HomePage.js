//Importing React Native stuff
import React from 'react'
import { StyleSheet , View, Text, Image, ImageBackground, Alert, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

//Importing my own components
import CatElement from './CatElement'

//Importing data
import CatData from '../assets/CatData'


export default function HomePage( { navigation } ) {

    function navigateToHomePage() {
        navigation.navigate("Home")
    }

    function navigateToDetails(id) {
        //Alert.alert(`${id}`)
        navigation.navigate('CatPage', {id: id})
    }    

    const cats = CatData.map( cat => {
        return (
            <CatElement
                key = {cat.id}
                id = {cat.id}
                image = {cat.image}
                title = {cat.title}
                description = {cat.description}
                handlePressFunction = {navigateToDetails}
                style = {styles.catElement}
            /> 
        )
    })

    return (
        <ScrollView
            style = {styles.container}
            showsVerticalScrollIndicator = {false}
        >
            {cats}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 30,
    },

    catElement: {
        borderWidth: 3,
        borderColor: 'red'
    }
})