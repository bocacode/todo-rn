import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native'

function TodosScreen({ navigation, route }) {
  const [data, setData] = useState()

  useEffect(() => {
    console.log('here is data', data)
  }, [])

  const getData = () => {
    fetch('https://todo-too-rb-api.web.app/tasks/3m5rYt8z2fQKDDm0wlgrxg3hFh82')
      // .then(resp => console.log(resp.json()))
      .then(res => setData(res.json()))
      .catch(err => console.log(err))
  }

  const { name } = route

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {/* <HomeText myName={myName} /> */}
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
                    { text: 'OK', onPress: () => getData() },
                  ],
                  { cancelable: false }
                )
              // console.log('my button was pressed'), Alert.alert(`hi, ${myName}`)
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('NewTodo')}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1273306124863889409/MAgy1kHL_400x400.jpg',
              }}
            />
          </TouchableOpacity>
          <Text>no place like => {name}</Text>

          {/* {data.map(item => {
            return (
              
            )
          })} */}
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
