import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  

  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const Add = () => {
    // let payload = {
    //   data: [
    //     {
    //       name: name,
    //       number: number,
    //     },
    //   ],
    // };
    dispatch({type: 'ADD', payload:{Name:name, Number:number }});
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text1}>Input</Text>
        <View style={styles.inp1}>
          <TextInput
            style={{fontSize: 20, marginLeft: 10, marginTop: 10}}
            placeholder="Enter Name"
            value={name}
            onChangeText={value => {
              setname(value);
            }}
          />
        </View>
        <View style={styles.inp1}>
          <TextInput
            style={{fontSize: 20, marginLeft: 10, marginTop: 10}}
            placeholder="Enter number"
            value={number}
            onChangeText={value => {
              setnumber(value);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            Add();
            navigation.navigate('data');
          }}>
          <Text style={{alignSelf: 'center', fontSize: 30, marginTop: 20}}>
            Add
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('data')
        }}>
            <Text style={{alignSelf: 'center', fontSize: 30, marginTop: 40}}>
                Show Data
            </Text>
        </TouchableOpacity>
        {/* <FlatList data={data} renderItem={renderItem} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#13364c',
  },
  text1: {
    fontSize: 30,
    alignSelf: 'center',
  },
  inp1: {
    borderWidth: 2,
    marginTop: 30,
    height: 50,
    marginBottom: 20,
    borderRadius: 30,
    marginLeft: '10%',
    marginRight: '10%',
    fontSize: 20,
  },
});
























// // import React from 'react';
// // import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// // import { useSelector, useDispatch } from 'react-redux';
// // //useSelector to read store properties
// // //useDispatch to pass the action

// // export default function Home() {
// // const disptach=useDispatch();
// // const {reduxCounter} = useSelector((store) => store.HomeReducer);

// // const onAdd=()=>{
// //     disptach({type:"INCREMENT" , payload:{reduxCounter:reduxCounter+1}})
// // }

// // const onSub=()=>{
// //     disptach({type:"INCREMENT" , payload:{reduxCounter:reduxCounter-1}})
// // }

// // const onReset=()=>{
// //     disptach({type:'RESET'})
// // }

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity style={styles.btn} onPress={onAdd}>
// //         <Text>{'Add'}</Text>
// //       </TouchableOpacity>
// //       <Text style={styles.textStyle}>{reduxCounter}</Text>
// //       <TouchableOpacity style={styles.btn} onPress={onSub}>
// //         <Text>{'Sub'}</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity style={styles.btn} onPress={onReset}>
// //         <Text>{'RESET'}</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 0.5,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// //     textStyle: {
// //         fontSize: 20,
// //         color: 'red',
// //         fontWeight: 'bold',
// //     },
// //     btn: {
// //         height: 40,
// //         width: 100,
// //         marginVertical: 20,
// //         backgroundColor: 'aqua',
// //         alignItems:'center',
// //         justifyContent:'center'
// //     }
// // });

// import React from "react";
// import {View, Text, TouchableOpacity} from 'react-native';
// import { useDispatch, useSelector } from "react-redux";

// export default function Home(){

// const dispatch=useDispatch();
// const {counter}=useSelector((store)=>store.HomeReducer)

// const Add=()=>{
// dispatch({type:"Increment", payload:{counter:counter+1}})
// }

// const Subtract=()=>{
//     dispatch({type:"Decrement"})
// }

// const Reset=()=>{
//     dispatch({type:'Reset'})
// }

//     return(
//         <View style={{marginTop:200}}>
//             <View style={{justifyContent:'center',alignSelf:'center',width:60,height:60}}>
//             <TouchableOpacity onPress={Add}>
//             <Text style={{fontSize:20,backgroundColor:'red',marginBottom:10}}>
//               Add
//             </Text>
//             </TouchableOpacity>
//             <Text style={{marginBottom:40,fontSize:20}}>{counter}</Text>
//             <TouchableOpacity onPress={Subtract}>
//             <Text style={{fontSize:20,backgroundColor:'red',width:80}}>
//               Subtract
//             </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//             style={{marginTop:20}}
//             onPress={Reset}>
//             <Text style={{fontSize:20,backgroundColor:'red',width:80}}>
//               Reset
//             </Text>
//             </TouchableOpacity>
//             </View>
//             </View>
//     )
// }
