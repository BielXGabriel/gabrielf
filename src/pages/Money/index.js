import React from 'react';
import {StyleSheet , Text , View , FlatList} from 'react-native';

//import componentes 
import Header from '../../components/Header/index'
import Cards from '../../components/Cards/index'

export default function Money(){
  return(
    <View>
     <Header/>
    <Cards/>
    </View>

  )
}