
import React,{useState,useEffect,useRef} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,TextInput,TouchableOpacity} from 'react-native';
import MoviesWatch from '../../components/moviesWatch.js'
import { Button } from "react-native-elements";
import OTPTextView from 'react-native-otp-textinput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EnterOTP=({navigation})=>{
    const otpInputRef = useRef(null);
    const [val,setVal]=useState('')
    const [isGetOTPPressed,setIsGetOTPPressed]=useState(false);
    const onPressEnterOTP=()=>{
        navigation.navigate('Subscribe');
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:480}}>
        <View style={{backgroundColor:'white',flex:1,justifyContent:'space-evenly'}}>
          
        <Text style={{...style.tStyle,fontWeight:'400',fontSize:48,lineHeight:55,color:'#FF3737'}}>Bellazza</Text>
            <Text style={{...style.tStyle,fontWeight:'600',fontSize:20,lineHeight:30,}}>Enter OTP</Text>
            <Text style={{...style.tStyle,fontWeight:'500',fontSize:14,lineHeight:21,width:'60%',alignSelf:'center'}}>Please enter the OTP that you have recieved on your phone number</Text>
                <OTPTextView 
                    ref={e => {otpInputRef.current=val; console.log(e)}}
                    handleTextChange={(e)=>{setVal(e);}}
                    containerStyle={{color:'white',width:'80%',alignSelf:'center'}}
                    textInputStyle={{backgroundColor:'white',borderRadius:10,color:'black',borderColor:'#FF3737',borderWidth:1}}
                    tintColor="#FF3737"
                    offTintColor="#FF3737"
                />
    
            
           
                <Button onPress={()=>{onPressEnterOTP()}} buttonStyle={{width:'70%', borderRadius:15,alignSelf:'center',height:58,backgroundColor:'#EA2424'}} title="Enter OTP"/>
                <TouchableOpacity onPress={()=>navigation.navigate('EnterOTP')}><Text style={{fontWeight:'600',fontSize:13,lineHeight:18,fontFamily:'Poppins-Regular',alignSelf:'center',color:'#EA2424'}}>Didn’t get the OTP?  Send Again</Text></TouchableOpacity>
    
          
        </View>
        </KeyboardAwareScrollView>
    )
}

export default EnterOTP;
const style=StyleSheet.create({
    tStyle:{
        fontFamily:'Poppins-Regular',
        textAlign:'center',
        color:'black'
    }
})