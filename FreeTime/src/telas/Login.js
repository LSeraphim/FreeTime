import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.logoContainer}>
        <Image style={styles.logoFT} source={require('../../components/img/LogoApp.png')} />
      </View>
      <View style={styles.userContainer}>
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
          <View style={styles.containerButton}>
            <Text style={{color: '#ffff', fontSize: 24}}>Entrar</Text>
          </View>
          <Text style={{fontSize:10, marginBottom:50}}>Esqueci minha senha</Text>
          <Text>Entrar com</Text>
          <View style={styles.accountContainer}>
            <Image style={styles.accountIcons} source={require('../../components/img/LogoGoogle.png')} />
            <Image style={styles.accountIcons} source={require('../../components/img/LogoApple.png')} />
          </View>
          <Text style={styles.createAccount}>Criar uma conta</Text>
        </View>

    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
  logoFT: {
    width: 180,
    height:180,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(4, 119, 125, 1)',
    alignItems: 'center',
    width: '100%',
    height: '18%',
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
  },
  userContainer: {
    paddingTop: 40,
    backgroundColor: '#ffff',
    width: '80%',
    height: '100%',
    alignItems: 'center',
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
