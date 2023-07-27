import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props // destructuring
  const { item, date, temp } = styles // destructuring
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'lavender',
    borderRadius: 10,
    backgroundColor: 'steelblue'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})


export default ListItem
