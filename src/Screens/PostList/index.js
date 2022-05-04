import {View, Text, FlatList, ActivityIndicator, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import getPostList from '../../redux/PostList/action'
import Post from '../../Components/Post'

export default function index() {
  // const [id, setId] = useState=([])
  const dispatch = useDispatch();
  const {data, start} = useSelector(store => store.PostListReducer);
  console.log('start',data.id );
  useEffect(() => {
    dispatch(getPostList())
  }, [start]);

  const _renderItem = ({item}) => (
    <Post details = {item}/>
  );
  const _onEndReached = () => {
    let payload = start + 10
    dispatch({type : "Paginate", payload : payload})
  };  
  
  return(
<View>
  <Pressable></Pressable>
<FlatList 
  data={data} 
  renderItem={_renderItem} 
  onEndReached={_onEndReached}
  onEndReachedThreshold={0.7}
  ListEmptyComponent={()=>{
    return(
      <ActivityIndicator style={{justifyContent:'center', alignItems:'center'}}/>

    )
  }}
  />
</View>

  ) 
}
