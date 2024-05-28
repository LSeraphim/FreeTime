import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, ProgressBarAndroidBase } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();
  
  return(
    <SafeAreaView style={styles.container}>
      { <StatusBar style="auto" /> }

        <View style={styles.headerContainer}>
            <Text style={{color: '#ffff', fontSize: 15}}>Liga <Text style={styles.ligaText}>MONGE</Text> da concentração</Text>
            <Image style={styles.logoFt} source={require('../../../components/img/JapaAvatar.jpg')} />
            <View style={styles.subHeader}>
                <ProgressBarAndroidBase styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.5}/>
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
        flexDirection: 'row',
        backgroundColor: '#04777D',
        borderColor: '#0000',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingEnd: '5%',
        paddingStart: '5%',
        paddingTop: '10%'
        

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
    }
  })