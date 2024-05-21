import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
        <View style={styles.logoContainer}>
            <Image style={styles.logoFT} source={require('./components/img/LogoApp.png')} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(4, 119, 125, 1)',
        alignItems: 'center',
        width: '100%',
        height: '60%',
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75,
    },
  logoFT: {
    width: 200,
    height:200,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
