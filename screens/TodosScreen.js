import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Alert } from 'react-native'

function TodosScreen() {
  useEffect(() => {
    console.log('component loaded')
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <HomeText myName={myName} />
          <Button
            title='Button'
            color='red'
            onPress={() => {
              console.log('my button was pressed'),
                Alert.alert(
                  'Alert Title',
                  'My Alert Msg',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                  ],
                  { cancelable: false }
                )
              // console.log('my button was pressed'), Alert.alert(`hi, ${myName}`)
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: 100
    // paddingVertical: '10%',
  },
  heading: {
    color: 'rgb(255, 105, 180)',
    fontWeight: '800',
    marginBottom: 400,
  },
})

export default TodosScreen
