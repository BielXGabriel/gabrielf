import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

export default function Cards() {
  return (
    <ScrollView 
    horizontal={true} 
    style={styles.container}
    showsHorizontalScrollIndicator={false}>
    
      <View style={styles.cards}>
        <Text style={styles.textcards}> cartões de credito </Text>
        
        
      </View>

      <View style={styles.cards}>
        <Text style={styles.textcards}> cartões de credito </Text>
      </View>

      <View style={styles.cards}>
        <Text style={styles.textcards}> cartões de credito </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 10,
    top: 20,
    right: 10,
    bottom: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  cards: {
  marginHorizontal: 30,
  marginBottom: 50,
  marginLeft: 10,
  top: 20,
  width: 300,
  height: 200,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOpacity: 10,
  shadowRadius: 10,
  shadowOffset: {
    width: 10,
    height: 10, // aumentar a altura da sombra
  },
  
  backgroundColor: '#fff',
  elevation: 10,
},
  textcards: {
    color: '#000',
  },
});
