import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersList from '../modules/userList'

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UsersList" component={UsersList}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;