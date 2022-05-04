import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../Screens/PostList/styles';

export default function Post({details}) {
    const {id, title} = details
    const navigation = useNavigation()

    const _openListDetails = () =>{

        return(
          navigation.navigate('PostDetails',{id}))
      }
  return (
    <Pressable onPress={_openListDetails}>
    <View style={styles.container}>
      <Text style={styles.textSty}>{id}</Text>
      <Text style={styles.textSty}>{title}</Text>
    </View>
  </Pressable>
  )
}