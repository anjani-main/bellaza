import React,{useState,useEffect} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,ActivityIndicator,Image} from 'react-native';



const MoviesWatch=()=>{
    return (
        <View>
            <Image 
                source={require('../statics/playbtn.png')}
                style={{width:100,height:100,alignSelf:'center',marginBottom:40}}
                />
            <Text style={{flexDirection:'row',alignSelf:'center',marginBottom:10,fontSize:28}}>
               <Text style={{color:'white'}}>Movies</Text><Text style={{color:'#6644B8'}}>Watch</Text>
            </Text>
            <Text style={{color:'white',alignSelf:'center',width:'65%',textAlign:'center',marginBottom:25,fontSize:15}}>Watch unlimited movies , series & TV shows anywhere anytime</Text>
        </View>
    )
}

export default MoviesWatch;