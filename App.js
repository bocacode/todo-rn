import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeText from './components/HomeText'
import TodosScreen from './screens/TodosScreen'

export default function App() {
  const myName = 'Jonathan'

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={TodosScreen} options={{ title: 'Welcome' }} />
        {/* <Stack.Screen name='Profile' component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
