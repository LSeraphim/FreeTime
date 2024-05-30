import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';



export default function Home() {

  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>
      { <StatusBar style="auto" /> }

        <View style={styles.headerContainer}>

          <View style={styles.headerBox}>
            <Text style={{color: '#ffff', fontSize: 15}}>Liga <Text style={styles.ligaText}>MONGE</Text> da concentração</Text>
            <Image style={styles.logoFt} source={require('../../../components/img/JapaAvatar.jpg')} />
          </View>  

          <View style={styles.subHeader}>
            <View style={styles.progress}>
              
            </View>
          </View>

        </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex:1,
    },
    headerContainer:{
        backgroundColor: '#04777D',
        width: '100%',
        paddingTop: '8%'
    },
    headerBox:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingEnd: '5%',
      paddingStart: '5%',
      
    },
    logoFt:{
        width: 95,
        height: 95,
        borderRadius: 50,
        borderColor: '#096469',
        borderWidth: 2
    },
    ligaText:{
        fontWeight: 'bold',
        fontSize: 25
    },
    subHeader:{
      backgroundColor:"#048A91",
      width:'100%',
      height: 80,
      borderTopLeftRadius: 12,
      borderTopRightRadius:12 ,
    },
    
  })