import { StyleSheet, View } from 'react-native';

export default props => {
    const boxSideW = props.boxWidth;
    const boxSideH = props.boxHeight;
    return(
        <View style={{width:boxSideW,height:boxSideH}}>
        </View>
    )
}
