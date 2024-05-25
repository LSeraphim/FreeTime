import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';


export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      { <StatusBar style="auto" /> }
     
        {/* Container com Logo */}
        <View style={styles.logoContainer}>
          <Image style={styles.logoFT} source={require('../../../components/img/LogoApp.png')} />
        </View>
      

        {/* Container com dados do usuário */}
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <View style={styles.inputContainer}>
              <Text style={{fontSize:16}}>Usuário</Text>
              
              <View style={styles.inputBox}>
                <TextInput  onChangeText={""} placeholder='Seu nome de usuário'/>
              </View>

              <Text style={{fontSize:16}}>Senha</Text>
              <View style={styles.inputBox}>
                <TextInput  onChangeText={""} placeholder='Sua senha'/>
              </View>
            </View>
            <TouchableOpacity style={styles.containerButton}>
              <Text style={{color: '#ffff', fontSize:24}}>Entrar</Text>
            </TouchableOpacity>

            <Text style={{fontSize:10, marginBottom:50}}>Esqueci minha senha</Text>

            {/* Acessar contas com outros apps */}
            <Text>Entrar com</Text>
            <View style={styles.accountContainer}>
              <Image style={styles.accountIcons} source={require('../../../components/img/LogoGoogle.png')} />
              <Image style={styles.accountIcons} source={require('../../../components/img/LogoApple.png')} />
            </View>
            
            {/* Ponte para o Register */}
            <Text style={styles.createAccount}>Criar uma conta</Text>

          </Animatable.View>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#04777D',
        flex:1,
    },
  logoFT: {
    width: 130,
    height:130,
  },
  logoContainer: {
    flex:1,
        backgroundColor: '#04777D',
        justifyContent: 'center',
        alignItems: 'center',
  },
  containerForm:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingStart: '10%',
    paddingEnd: '10%',
    alignItems: 'center',
    paddingTop: 50
},
  inputContainer:{
    width: '100%'
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
    width: 131,
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginBottom: 20
  },
  accountIcons: {
    width: 50,
    height:50,
  },
  accountContainer:{
    flexDirection: 'row',
    width: 200,
    height: 50,
    justifyContent: 'space-evenly'
  },
  createAccount: {
    fontSize: 16,
    borderBottomWidth:1,
    marginTop: 35
  }

});
