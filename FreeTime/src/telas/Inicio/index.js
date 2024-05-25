import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image  
                animation="flipInY"
                source={require('../../../components/img/LogoApp.png')}
                style={{ width: '100%' }}
                resizeMode='contain' />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Foque na sua trilha de estudos de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o Login para começar</Text>

                <TouchableOpacity
                 onPress={ () => navigation.navigate('Login')}
                 style={styles.button}>
                    <Text style={styles.buttonText}>Começar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#04777D',
    },
    containerLogo: {
        flex:2,
        backgroundColor: '#04777D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position:'absolute',
        backgroundColor: '#04777D',
        borderRadius:50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})