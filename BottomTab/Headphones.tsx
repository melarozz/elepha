import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Headphones = () => {
  return(
    <View style={styles.container}> 
      <Text style={styles.heading}> Headphones </Text>
    </View>
  )
}

export default Headphones;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'brown',
  }
});