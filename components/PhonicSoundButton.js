import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class PhonicSoundButton extends React.Component {
  
  render() {
    return (
      
       <View>
      <TouchableOpacity 
      style={styles.button}
      
      />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  
  button:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#97CDE4',
    color:'#FFFFFF'
  }
});