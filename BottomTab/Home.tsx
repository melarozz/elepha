import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return(
    <View style={styles.container}> 
      <Text style={styles.heading}> Home </Text>
    </View>
  )
}

export default Home;

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