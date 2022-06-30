import React,{useEffect,useReducer,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon } from 'react-native-elements';

// import axios from "axios";
// import Toast from 'react-native-toast-message';

const Favourite=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    const Card=({src,title})=>{
        return(
            <View style={{flexDirection:'column',width:145,height:250}}>
                <Image source={src} style={{height:190,width:143}} />
                {/* <Text style={{marginTop:5,alignSelf:'center',height:36,width:137,color:'white',fontFamily:'Poppins-Regular',textAlign:'center'}}>Continue to watch {title}</Text> */}
            </View>
        )
    }
      useEffect(() => {
   
      },[]);
      
    return(
      
        <ScrollView style={{backgroundColor:'black',flex:1,paddingTop:60,paddingTop:25}}>
            <View style={{borderWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:'6%'}}>
                <TouchableOpacity onPress={()=>navigation.goBack() }>
                    <Image source={require('../../statics/back.png')}  style={{backgroundColor:'#4e4060',width:30,height:30,borderRadius:100,borderWidth:1}}/>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',alignSelf:'center',marginRight:10,fontFamily:'Poppins-Regular',fontSize:18,fontWeight:'600'}}>Favourite</Text>
                </View>
                <Text >'                 '</Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:20}}>
                <Card  key ={1} src={require('../../statics/movImg.png')} title='Johm wick 3'/>
               
                <Card  key ={2} src={require('../../statics/movImg.png')} title='Johm wick 3'/>
                <Card  key ={3} src={require('../../statics/movImg.png')} title='Johm wick 3'/>
                <Card  key ={4} src={require('../../statics/movImg.png')} title='Johm wick 3'/>
                <Card  key ={5} src={require('../../statics/movImg.png')} title='Johm wick 3'/>
                <Card  key ={6} src={require('../../statics/movImg.png')} title='Johm wick 3'/>
               

            </View>
            
        </ScrollView>
    )
}

export default Favourite;