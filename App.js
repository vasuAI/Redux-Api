// import React from 'react';
// import {Provider} from 'react-redux';
// import Home from './src/Home';
// import store from './src/Reducer/store';
// import {StyleSheet, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Data from './src/Home/Data';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen name="data" component={Data} 
//           options={{headerStyle:{
//             backgroundColor:'#ddd'
//           }
//         }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Reducer/store' 
import Navigator from './src/navigator';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
     </Provider>
  );
}



















// import React from "react";
// import Home from "./src/Home";
// import { Provider } from "react-redux";
// import store from './src/Reducer/store'

// export default function App(){
//   return(
// <Provider store={store}>
//     <Home/>
//     </Provider>
//   )
// }
