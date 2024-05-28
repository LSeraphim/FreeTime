import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from '../telas/Inicio';
import Login from '../telas/Login';
import Registro from '../telas/Registro';
import Home from '../telas/home'
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
            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}