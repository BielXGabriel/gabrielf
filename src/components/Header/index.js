import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

// import icons
import {Feather} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64;

export default function Header({name}) {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonuser}>
           <Feather name="user" size={30} color='#fff' />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00703c',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  username:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonuser:{
    width: 45,
    height: 45,
    backgroundColor: '#rgba(255, 255, 255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45 / 2,
  }

});
