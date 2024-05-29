import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Container do header com "Register" */}
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 32, color: '#ffff', textAlign: 'center' }}>Registrar-se</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <AntDesign name='back' color={'#fff'} size={25} />
        </TouchableOpacity>
      </View>

      {/* Dados do usuário */}
      <Animatable.View delay={100} animation="bounceInLeft" style={styles.containerForm}>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 16 }}>Nome Completo</Text>
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={""}
              placeholder='Seu nome completo'
            />
          </View>

          <ScrollView>
            <Text style={{ fontSize: 16 }}>Usuário</Text>
            <View style={styles.inputBox}>
              <TextInput
                onChangeText={""}
                placeholder='Seu nome de usuário'
              />
            </View>

            <Text style={{ fontSize: 16 }}>E-mail</Text>
            <View style={styles.inputBox}>
              <TextInput
                onChangeText={""}
                placeholder='Seu E-mail'
              />
            </View>

            <Text style={{ fontSize: 16 }}>Senha</Text>
            <View style={styles.inputBox}>
              <TextInput
                onChangeText={""}
                placeholder='Sua senha'
                secureTextEntry
              />
            </View>

            <Text style={{ fontSize: 16 }}>Confirmar Senha</Text>
            <View style={styles.inputBox}>
              <TextInput
                onChangeText={""}
                placeholder='Confirme a senha'
                secureTextEntry
              />
            </View>
          </ScrollView>
        </View>
        {/* Button */}
        <TouchableOpacity>
          <View style={styles.containerButton}>
            <Text style={{ color: '#ffff', fontSize: 24 }}>Registrar-se</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#04777D',
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#04777D',
    justifyContent: 'center',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  userContainer: {
    paddingTop: 20,
    width: '80%',
  },
  inputContainer: {
    width: '100%',
  },
  inputBox: {
    width: '100%',
    borderBottomColor: '#020202',
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  containerButton: {
    backgroundColor: 'rgba(4, 119, 125, 1)',
    width: 226,
    height: 73,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginBottom: 20,
  },
  containerForm: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingStart: '10%',
    paddingEnd: '10%',
    alignItems: 'center',
    textAlign: 'left',
    paddingTop: 50,
  },
});
