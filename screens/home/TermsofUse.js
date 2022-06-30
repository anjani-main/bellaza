import React,{useEffect,useReducer,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon } from 'react-native-elements';
// import axios from "axios";
// import Toast from 'react-native-toast-message';

const TermsOfUse=({navigation})=>{
    const [loading,setIsLoading] = useState(true);

      useEffect(() => {
   
      },[]);
      
    return(
      
        <View style={{backgroundColor:'black',flex:1,paddingTop:60,paddingTop:25}}>
            <View style={{borderWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:'6%'}}>
                <TouchableOpacity onPress={()=>navigation.goBack() }>
                    <Image source={require('../../statics/back.png')}  style={{backgroundColor:'#4e4060',width:30,height:30,borderRadius:100,borderWidth:1}}/>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',alignSelf:'center',marginRight:10,fontFamily:'Poppins-Regular',fontSize:18,fontWeight:'600'}}>Terms Of Use</Text>
                </View>
                <Text >'                 '</Text>
            </View>
        </View>
    )
}

export default TermsOfUse;