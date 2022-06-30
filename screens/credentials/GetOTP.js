
import React,{useState,useEffect,useRef} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,TextInput} from 'react-native';
import MoviesWatch from '../../components/moviesWatch.js'
import { Button } from "react-native-elements";
import OTPTextView from 'react-native-otp-textinput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const GetOTP=({navigation})=>{
    const otpInputRef = useRef(null);
    const [val,setVal]=useState('')
    const [isGetOTPPressed,setIsGetOTPPressed]=useState(false);
    const onPressEnterOTP=()=>{
        navigation.navigate('Subscribe');
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:680}}>
        <View style={{backgroundColor:'black',flex:1,justifyContent:'space-evenly'}}>
           <MoviesWatch/>

           {isGetOTPPressed==false?(
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:8,borderColor:'#352449', color: 'black',backgroundColor:'#352449',alignSelf:'center',justifyContent:'center',color:'white',alignItems:'center'}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder="                           Enter Email Address"
                ></TextInput>
           ):(
            <>
                <OTPTextView 
                    ref={e => {otpInputRef.current=val; console.log(e)}}
                    handleTextChange={(e)=>{setVal(e);}}
                    containerStyle={{color:'white',width:'80%',alignSelf:'center'}}
                    textInputStyle={{backgroundColor:'#352449',borderRadius:15,color:'white',borderColor:'#6D44B8',borderWidth:1}}
                    tintColor="none"
                    offTintColor="none"
                />
                <Text>Hi</Text>
            </>
           )}
           {isGetOTPPressed==false?(
                <Button onPress={()=>setIsGetOTPPressed(true)} buttonStyle={{width:'80%', borderRadius:15,alignSelf:'center',height:58,backgroundColor:'#6D44B8'}} title="Get OTP" />
           ):(
                <Button onPress={()=>{onPressEnterOTP()}} buttonStyle={{width:'70%', borderRadius:15,alignSelf:'center',height:58,backgroundColor:'#6D44B8'}} title="Enter OTP"/>
           )}
          
        </View>
        </KeyboardAwareScrollView>
    )
}

export default GetOTP;