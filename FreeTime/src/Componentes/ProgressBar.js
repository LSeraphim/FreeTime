import { StyleSheet, Text, View, Animated } from 'react-native';
import React from 'react';

const Progress = ({ step, steps, height }) => {
    const[width, setWidht] = React.useState(0);
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true
        }).start();
    }, []);

    React.useEffect(() => {
        // -Width + width * step / steps
        reactive.setValue(-width + (width * step) / steps)
    }, [step, width])

    return(
      <>
  
      <View
       onLayout={e => {
        const newWidth = e.nativeEvent.layout.width;
        
        setWidht(newWidth);
       }}
       style={{
          height,
          backgroundColor: '#ffff',
          borderRadius: height,
          overflow: 'hidden',
        }}
      >
        <Animated.View 
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: '#04777D', 
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
                {
                    translateX: animatedValue,
                },
            ]
          }} 
        />
        <Text
          style={{
            textAlign: 'center',
            color: '#000'
          }}
        >
          {step}0%
        </Text> 

      </View>
      </>
    )
  }

  export default function ProgressBar() {

    return(
        <View style={styles.progressbar}>
             <Progress step={3} steps={10} height={20} />
            </View>
    )
  }

  const styles = StyleSheet.create({
    progressbar:{
        width: '70%'
    }
  })