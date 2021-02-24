import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import { ListItem, Avatar, Button, Input } from 'react-native-elements'

import InputForm from '../components/InputForm'

function TodosScreen({ navigation, route }) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://todo-too-rb-api.web.app/tasks/3m5rYt8z2fQKDDm0wlgrxg3hFh82')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const { name } = route

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ width: '100%' }}>
        <ScrollView>
          {/* <HomeText myName={myName} /> */}
          {/* <Button
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
          /> */}
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 30 }}
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1273306124863889409/MAgy1kHL_400x400.jpg',
              }}
            />
          </TouchableOpacity>
          <Button
            title='Go to New Todos'
            type='outline'
            // containerStyle={{ width: 200, alignSelf: 'center', marginVertical: 20 }}
            buttonStyle={{ width: 200, alignSelf: 'center', marginVertical: 20 }}
            onPress={() => navigation.navigate('NewTodo')}
          />
          {/* {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map(todoItem => {
              if (data) {
                return (
                  <View key={todoItem.id}>
                    <Text>
                      {todoItem.item}, {todoItem.id}
                    </Text>
                  </View>
                )
              }
            })
          )} */}
          {/* {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => <Text>{item.item}</Text>}
            />
          )} */}
          {/* <InputForm /> */}
          <View>
            <Input placeholder='new Todo' />
          </View>
          <View>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              data.map((x, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar
                    source={{
                      uri:
                        'https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg',
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>=> {x.item} </ListItem.Title>
                    <ListItem.Subtitle>{x.id}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            )}
          </View>
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
    width: '100%',
  },
  heading: {
    color: 'rgb(255, 105, 180)',
    fontWeight: '800',
    marginBottom: 400,
  },
})

export default TodosScreen
