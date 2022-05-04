import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function index() {
    const dispatch = useDispatch() 
    const flatData = useSelector(store=>store.UserDetailReducer)
    console.log('flatData', flatData);
//   const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=1`)
      .then(res => {
          const newData = res.data.data;
        dispatch({type:'DETAILS',payload:[...newData]})
      })
      .catch(err => console.log(err));
  }, []);
  const _renderItem = ({item}) => (
    <View>
      <Text>{item.email}</Text>
    </View>
  );

  const _onEndReached = ()=>(
    dispatch({type:'INCRE'})
  )

  return <FlatList 
  data={flatData.data} 
  renderItem={_renderItem} 
  onEndReached={_onEndReached}
  
  />;
}
