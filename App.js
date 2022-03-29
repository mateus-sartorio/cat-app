//Importing React Native Stuff
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

//Importing my own components
import HomePage from './components/HomePage'
import CatPage from './components/CatPage'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" >
        <Stack.Screen name = "Home" component = {HomePage} />
        <Stack.Screen name = "CatPage" component = {CatPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
