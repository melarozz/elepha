import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Grid = () => {
  return(
    <View style={styles.container}> 
      <Text style={styles.heading}> Grid </Text>
    </View>
  )
}

export default Grid;

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