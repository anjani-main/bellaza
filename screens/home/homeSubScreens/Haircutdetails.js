import React, { useState } from 'react';
import {View,Text, StyleSheet,ImageBackground, TouchableOpacity,ScrollView,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Haircutdetails=({navigation})=>{
    const [category,setCategory]=useState('Haircut');
    const changeCateg=(service)=>{
        setCategory(service);
    }
    return(
        <View style={{flex:1}}>
            <Image source={require('../../../statics/poster.png')} resizeMode="cover" style={{width:'100%',height:'50%'}}/>
            <ScrollView style={{borderColor:'red',borderWidth:1,height:500,position:'relative',top:-80,borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:'white',shadowColor:'black',elevation:50}}>

            </ScrollView>
        </View>
    )
}

export default Haircutdetails;
const styles = StyleSheet.create({
    wrapper: {
        marginTop:30
    },
    slide1: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide4: {
        flex: 1,
        backgroundColor: 'white'
      },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })