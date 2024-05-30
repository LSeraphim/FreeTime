import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default props => {
    const navigation = useNavigation();
    const myPress = props.myPress;

    const myText = props.myText;

    return(
        <TouchableOpacity 
            onPress={props.myPress}
            style={styles.containerButton}>

            <Text style={{color: '#ffff', fontSize:24}}>{myText}</Text>

        </TouchableOpacity>
    )

    
};

const styles = StyleSheet.create({
    containerButton: {
        backgroundColor: 'rgba(4, 119, 125, 1)',
        width: 131,
        height: 41,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        marginBottom: 20
      },
})