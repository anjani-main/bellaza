import React,{useEffect,useReducer,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
// import Toast from 'react-native-toast-message';

const TermsOfUse=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    //const navigation2 = useNavigation();
      useEffect(() => {
      },[]);
      
    return(
      
        <ScrollView style={{backgroundColor:'white',flex:1}}>
            {/* <View style={{borderWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:'6%'}}>
                <TouchableOpacity onPress={()=>navigation.goBack() }>
                    <Image source={require('../../statics/back.png')}  style={{backgroundColor:'#4e4060',width:30,height:30,borderRadius:100,borderWidth:1}}/>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',alignSelf:'center',marginRight:10,fontFamily:'Poppins-Regular',fontSize:18,fontWeight:'600'}}>Terms Of Use</Text>
                </View>
                <Text >'                 '</Text>
            </View> */}
            <Header title="Term Of Use"/>
            <View style={{paddingHorizontal:25,marginTop:10}}>
                <Text style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum sagittis ante at sagittis. Proin ullamcorper eleifend mi sed fringilla. Phasellus eu quam ac neque vulputate iaculis. Nunc ut volutpat ante. Suspendisse tristique pretium odio vestibulum porta. Morbi in mauris ante. Quisque finibus ante in justo dictum, et fermentum ante accumsan. Sed nec turpis eget dolor maximus interdum vel et orci. In hac habitasse platea dictumst. Ut dictum felis efficitur dui condimentum, id convallis nisl tempus. Suspendisse diam dui, efficitur sit amet dui et, fermentum vehicula lectus.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum sagittis ante at sagittis. Proin ullamcorper eleifend mi sed fringilla. Phasellus eu quam ac neque vulputate iaculis. Nunc ut volutpat ante. Suspendisse tristique pretium odio vestibulum porta. Morbi in mauris tur dui condimentum, id convallis nisl tempus. Suspendisse diam dui, efficitur sit amet dui et, fermentum vehicula lectus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum sagittis ante at sagittis. Proin ullamcorper eleifend mi sed fringilla. Phasellus eu quam ac neque vulputate iaculis. Nunc ut volutpat ante. Suspendisse tristique pretium odio vestibulum porta. Morbi in mauris ante. Quisque finibus ante in justo dictum, et fermentum ante accumsan. Sed nec turpis eget dolor maximus interdum vel et orci. In hac habitasse platea dictumst. Ut dictum felis efficitur dui condimentum, id convallis nisl tempus. Suspendisse diam dui, 

                </Text>
            </View>
        </ScrollView>
    )
}

export default TermsOfUse;