import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersList from '../modules/userList'
import UserDetails from '../modules/userDet'
import PostList from '../Screens/PostList'
import PostDetails from '../Screens/PostDetails'

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='PostList'
            
            >
                {/* <Stack.Screen name="UsersList" component={UsersList}
                options={{headerStyle:{
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                    fontSize:23,
                    fontWeight: 'bold',
                }
            }}
                /> */}
                <Stack.Screen name="UserDetail" component={UserDetails}
                options={{headerStyle:{
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                    fontSize:23,
                    fontWeight: 'bold',
                }
            }}
                />
                <Stack.Screen name='PostList' component={PostList} />
                <Stack.Screen name='PostDetails' component={PostDetails} />
                {/* <Stack.Screen name='PostList' component={PostList} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;