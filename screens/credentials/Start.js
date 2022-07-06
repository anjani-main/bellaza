import React,{useState,useEffect} from "react";
import {useColorScheme,View,ActivityIndicator,Image} from 'react-native';
import MoviesWatch from '../../components/moviesWatch.js'
import { Button } from "react-native-elements";


const Start=({navigation})=>{
   useEffect(()=>{setTimeout(()=>{navigation.navigate('Register')},2000)},[])
    return (
        <View style={{backgroundColor:'white',flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',height:54,width:278}}/>
       
        </View>
    )
}

export default Start;