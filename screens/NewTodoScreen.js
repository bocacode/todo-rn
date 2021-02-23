import React from 'react'
import { Text, Button } from 'react-native'

function NewTodoScreen({ navigation, route }) {
  return (
    <>
      <Text>this is my route name => {route.name} </Text>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </>
  )
}

export default NewTodoScreen
