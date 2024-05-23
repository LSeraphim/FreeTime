import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView,  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Registro() {
    return (
        <SafeAreaView style={styles.container}>
          { <StatusBar style="auto" /> }
          <View style={styles.headerContainer}>
            <Text style={{fontSize:32, color:'#ffff', textAlign:'center'}}>Registrar-se</Text>
            <AntDesign name='back' color={'#fff'} size={25} />
          </View>
          <View style={styles.userContainer}>
            <View style={styles.inputContainer}>
                <Text style={{fontSize:16}}>Nome Completo</Text>
                <View style={styles.inputBox}>
                  <TextInput  onChangeText={""} placeholder='Seu nome de usuário'/>
                </View>
                <Text style={{fontSize:16}}>Usuário</Text>
                <View style={styles.inputBox}>
                  <TextInput  onChangeText={""} placeholder='Sua senha'/>
                </View>
                <Text style={{fontSize:16}}>E-mail</Text>
                <View style={styles.inputBox}>
                  <TextInput  onChangeText={""} placeholder='Sua senha'/>
                </View>
                <Text style={{fontSize:16}}>Senha</Text>
                <View style={styles.inputBox}>
                  <TextInput  onChangeText={""} placeholder='Sua senha'/>
                </View>
                <Text style={{fontSize:16}}>Confirmar Senha</Text>
                <View style={styles.inputBox}>
                  <TextInput  onChangeText={""} placeholder='Sua senha'/>
                </View>
              </View>
              
            </View>
            <View style={styles.containerButton}>
                <Text style={{color: '#ffff', fontSize: 24}}>Registrar-se</Text>
              </View>
    
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height:'100%'
    },
    headerContainer: {
        justifyContent: 'center',
        backgroundColor: 'rgba(4, 119, 125, 1)',
        width: '100%',
        height: '15%',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        padding:15
    },
    userContainer: {
        paddingTop: 20,
        backgroundColor: '#fff',
        width: '80%',
    },
    inputBox: {
      justifyContent: 'center',
      width: '100%',
      paddingTop: 10,
      borderBottomColor: '#020202',
      borderBottomWidth: 1,
      marginBottom: 40
    },
    containerButton: {
      backgroundColor: 'rgba(4, 119, 125, 1)',
      width: 226,
      height: 73,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 60,
      marginBottom: 20
    }
});
