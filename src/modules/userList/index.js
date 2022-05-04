import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import getUserList from './action';

export default function UsersList() {
  const dispatch = useDispatch();
  const {data, page, total} = useSelector(store => store.UsersListReducer);

  useEffect(() => {
    dispatch(getUserList());
  }, [page]);

  const _onEndReached = () => {
    if (data.length < total) {
        dispatch({ type: "INCREASE_PAGE" });
    }
}

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemCon}>
        <View style={styles.imgCon}>
          <Image
            resizeMode="cover"
            resizeMethod="resize"
            style={styles.imgStyle}
            source={{uri: item.avatar}}
          />
        </View>
        <View style={styles.rightCon}>
          <Text style={styles.textStyle}>{item.email}</Text>
          <Text
            style={
              styles.textStyle
            }>{`${item.first_name} ${item.last_name}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={{width: '90%'}}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={_onEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  itemCon: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    marginVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
  },
  imgCon: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  rightCon: {
    width: 'auto',
    height: '100%',
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    maxWidth: '100%',
    marginVertical: 2,
    fontWeight: '500',
  },
});
