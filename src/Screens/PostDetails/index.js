import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Post from '../../Components/Post';
import styles from '../PostDetails/styles';
import { useSelector } from 'react-redux';

export default function index(props) {
  const [data1, setData] = useState([])
  const {data} = useSelector(state=>state.PostListReducer)
  console.log('data', data1);
  const route = useRoute();
  const {
    params: { id },
  } = route;
  console.log('id',route);

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res)=>
      {setData(res.data)
      console.log(res.data)})
      .catch((err)=>console.log(err))
    },[id])

   const _renderItem = ({item}) =>{
     return(
       <View style={styles.commntCon}>
         <Text style={{color:'red'}}>{item.name}</Text>
         <Text numberOfLines={1}>{item.body}</Text>
       </View>
     )
   }
  return (
    <>
    <Post details={data1}/>
    <Text>Total Comments</Text>
    <FlatList 
    data={data1}
    renderItem = {_renderItem}
    ListEmptyComponent={()=>{
      return(
        <ActivityIndicator style={{justifyContent:'center', alignItems:'center'}}/>
      )
    }}
    />
    </>
  )
}