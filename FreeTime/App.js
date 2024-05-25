import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#04777D'}/>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
