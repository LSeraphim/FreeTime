import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from '../telas/Inicio'
import Login from '../telas/Login'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Inicio"
                component={Inicio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    )
}