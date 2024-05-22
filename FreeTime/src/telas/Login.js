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
            <Text>Usuário</Text>
            <View style={{marginBottom:80}}>
                <TextInput style={styles.inputBox} onChangeText={""} placeholder='Seu nome de usuário'/>
            </View>
            <Text>Senha</Text>
            <View>
                <TextInput style={styles.inputBox} onChangeText={""} placeholder='Sua senha'/>
            </View>
            <View style={styles.loginButton}>
                <Text style={}>Entrar</Text>
            </View>
        </View>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center'
    },
  logoFT: {
    width: 200,
    height:200,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(4, 119, 125, 1)',
    alignItems: 'center',
    width: '100%',
    height: '22%',
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
  },
  userContainer: {
    padding: 25,
    backgroundColor: '#f2f2f2',
    width: '80%',
    height: '100%'
  },
  inputBox: {
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
    borderBottomColor: '#020202',
    borderBottomWidth: 1,
  },
  loginButton: {
    backgroundColor: 'rgba(4, 119, 125, 1)',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
