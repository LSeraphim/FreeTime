import { StyleSheet, View, Text } from 'react-native';

export default props => {
    return(
        <View style={{width: props.boxSideW, height: props.boxSideH, backgroundColor: props.myColor, borderRadius: props.myRadius, justifyContent:'center' , alignItems:'center', marginBottom:'15%'}}>
            <View style={{backgroundColor:'#ffff', width:props.otherSideW , height:props.otherSideH, borderRadius: props.myRadius, marginTop: 25}}> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

