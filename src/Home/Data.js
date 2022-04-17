import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


export default function Data() {
    const {data} = useSelector((state)=>state.HomeReducer)

// const Delete=(i)=>{
// data.splice(i, 1)


// }

  const renderItem =({item}) =>{
      console.log('jbhvgbvcb',item)
    return(
        
      <View style={{borderWidth:1,borderRadius:10,padding:15,marginTop:10,marginLeft:20,marginRight:20,backgroundColor:'#ccc',flexDirection:'row'}}>
          <View>
        <Text>{item.Name}</Text>
      <Text>{item.Number}</Text>
      </View>
      <TouchableOpacity 
    //   onPress={() => {
    //     let i = data.findIndex(ele => ele ==item);
    //     Delete(i);
    //   }}
      style = {{left : 300,alignSelf:'center', position:'absolute'}}>
      <Image
     style={{height:20,width:20}}
     source={require('../assets/Images/bin.png')}
     />
      </TouchableOpacity>


      <TouchableOpacity 
      style = {{left : 260,alignSelf:'center', position:'absolute'}}
      >
          <Image
          style={{height:20,width:20}}
          source={require('../assets/Images/editing.png')}
          />
      </TouchableOpacity>
      
    
    </View>
    )
  }
  
  return (
      <View style={{flex:1,backgroundColor:'#13364c',paddingTop:10}}>
    <FlatList 
    data={data}
    renderItem={renderItem}
    />
    </View>
  )
}