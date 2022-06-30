import React,{useState,useEffect} from "react";
import {ImageBackground,SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,ActivityIndicator,Image} from 'react-native';
import MoviesWatch from '../../components/moviesWatch.js'
import { Button } from "react-native-elements";


const Start=({navigation})=>{
   useEffect(()=>{setTimeout(()=>{navigation.navigate('Register')},2000)},[])
    return (
        <View style={{backgroundColor:'black',flex:1}}>
            <ImageBackground source={require('../../statics/landing.png')} resizeMode="cover" style={{ flex: 1,
                justifyContent: "center"}}>
            </ImageBackground>
        </View>
    )
}

export default Start;