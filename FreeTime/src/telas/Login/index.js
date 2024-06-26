import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Forms from '../../Componentes/Forms';
import Button from '../../Componentes/Button';



export default function Login() {
  const navigation = useNavigation();
  // Variaveis que recebem a informação dos inputs
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [login, setLogin] = useState(null);
  const [display, setDisplay] = useState('none');

  // Envio do formulário de Login
  async function sendForm()
  {
    let response=await fetch('http://192.168.77.81:3000/login', {
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      }),
    });
    let json=await response.json();
    if(json === 'error'){
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 5000);
      await AsyncStorage.clear();
    } else {
      console.log('testeeee');
      navigation.navigate('home');
    }
  }


  return (

    <SafeAreaView style={styles.container}>

      { <StatusBar style="auto" /> }
     
        {/* Container com Logo */}
        <View style={styles.logoContainer}>
          <Image style={styles.logoFT} source={require('../../../components/img/LogoApp.png')} />
        </View>
      

        {/* Container com dados do usuário */}
        <Animatable.View delay={100} animation="fadeInUpBig" style={styles.containerForm}>

            <View style={styles.inputContainer}>
              <Forms myPlaceholder={'Seu nome de usuário ou email'} myText={'Usuário'} myValue={text=>setEmail(text)}/>
              
              <Forms myPlaceholder={'Sua senha'} myText={'Senha'} myValue={text=>setSenha(text)}/>
              <Text style={styles.displayErro(display)}>Usuario e/ou senha incorreto!</Text>
            </View>
            
            <Button myText={'Entrar'} myPress={() => sendForm()}/>

            <Text style={{fontSize:10, marginBottom:50}}>Esqueci minha senha</Text>

            {/* Acessar contas com outros apps */}
            <Text>Entrar com</Text>
            <View style={styles.accountContainer}>
              <Image style={styles.accountIcons} source={require('../../../components/img/LogoGoogle.png')} />
              <Image style={styles.accountIcons} source={require('../../../components/img/LogoApple.png')} />
            </View>

            
            {/* Ponte para o Register */}
            <TouchableOpacity
                onPress={ () => navigation.navigate('Registro')}
                style={styles.button}>
              <Text style={styles.createAccount}>Criar uma conta</Text>
            </TouchableOpacity>

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
  },
  displayErro:(text='none')=>({
    color: 'red',
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    display: text,
    top: -20,
    fontWeight: 'bold'
  })

});
