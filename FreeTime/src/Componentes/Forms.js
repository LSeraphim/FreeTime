import { View, TextInput, Text, StyleSheet } from "react-native";

export default props => {
    const myPlaceholder = props.myPlaceholder;
    const myText = props.myText;

    return (
            
            <View style={styles.inputBox}>
                <Text style={{fontSize:20}}>{myText}</Text>
                <TextInput  onChangeText={""} placeholder={myPlaceholder}/>
            </View>
    );
}


const styles = StyleSheet.create({
    
      inputBox: {
        width: '100%',
        paddingTop: 20,
        borderBottomColor: '#020202',
        borderBottomWidth: 1,
        marginBottom: 45
      },
})