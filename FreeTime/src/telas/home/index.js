import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import ProgressBar from '../../Componentes/ProgressBar';



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
            <ProgressBar />
            <Text>Usuário</Text>

          </View>
          
          <View style={styles.levelBar}>
            <Text style={{fontSize: 22, fontWeight: 'semibold'}}>Nível 99</Text>
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
      paddingTop: '8%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    headerBox:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingEnd: '5%',
      paddingStart: '5%',
      
      
    },
    logoFt:{
        width: 100,
        height: 100,
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
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      
    },
    levelBar:{
      width: 100,
      height: 40,
      backgroundColor: '#ffff',
      borderTopStartRadius: 5,
      borderTopEndRadius: 5,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      position: 'absolute',
      top: 110,
      left: 275,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })