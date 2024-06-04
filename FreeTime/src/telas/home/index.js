import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ProgressBar from '../../Componentes/ProgressBar';
import BoxContainer from '../../Componentes/BoxContainer';



export default function Home() {
  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>
      { <StatusBar style="auto" /> }

        {/*Engloba todo o Header   */}
        <View style={styles.headerContainer}>

          {/*Exibirá o nome do usuário  */}
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffff'}}>Usuário</Text>
            </View>

          <View style={styles.headerBox}>
            <Text style={{color: '#ffff', fontSize: 15}}>Liga <Text style={styles.ligaText}>MONGE</Text> da concentração</Text>
            <Image style={styles.logoFt} source={require('../../../components/img/JapaAvatar.jpg')} />
          </View>  


          <View style={styles.subHeader}>

            <View style={styles.iconBox} >
              <FontAwesome5 name="running" size={24} color="white" />
              <MaterialCommunityIcons name="brain" size={24} color="white" />
            </View>

            <ProgressBar />
          </View>
          
          <View style={styles.levelBar}>
            <Text style={{fontSize: 22, fontWeight: 'semibold'}}>Nível 99</Text>
          </View>

        </View>

        <View style={styles.bodyContainer}>
          <Text style={{fontSize: 25}}>Tempo de tela</Text>
          <BoxContainer boxSideW={'100%'} boxSideH={'70%'} />
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
      paddingTop: '5%',
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
      borderTopLeftRadius: 12,
      borderTopRightRadius:12 ,
      padding: 15,
      justifyContent: 'space-around',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    levelBar:{
      width: 100,
      height: 40,
      backgroundColor: '#ffff',
      borderTopStartRadius: 8,
      borderTopEndRadius: 8,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
      position: 'absolute',
      top: '65%',
      left: '70%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconBox:{
      flexDirection: 'row',
      width: '70%',
      justifyContent: 'space-between'
    },
    bodyContainer:{
      alignItems: 'center',
      padding: 15,
      flex:1
    },
   
  })