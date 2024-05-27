import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();
  
  return(
    <SafeAreaView>
      { <StatusBar style="auto" /> }

    </SafeAreaView>
  );
}