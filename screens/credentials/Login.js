
import React,{useState,useEffect,useRef} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,TextInput,TouchableOpacity,Image} from 'react-native';
import MoviesWatch from '../../components/moviesWatch.js'
import { Button, Icon } from "react-native-elements";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { color } from "react-native-reanimated";
import { CheckBox } from 'react-native-elements'

const Register=({navigation})=>{
    const [isEnterNamePressed,setIsEnterNamePressed]=useState(false);
    const [texti,setTextI]=useState()

    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:680}}>
        <View style={{backgroundColor:'white',flex:1,justifyContent:'space-evenly'}}>
        <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',marginTop:10}}/>
            <Text style={{fontFamily:'Poppins-Bold',color:'black',alignSelf:'center',fontWeight:'600',fontSize:20,lineHeight:30}}>Hello Again !</Text>
            <Text style={{...style.tStyle,fontWeight:'500',fontSize:14,lineHeight:21}}>Welcome back you’ve been missed!</Text>
            <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='phone'?'#F0F0F0':'white'),elevation:(texti=='phone'?5:0),paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    onFocus={()=>setTextI('phone')}
                    placeholderTextColor = "gray"
                    placeholder="  Phone/email "
            ></TextInput>
             <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='password'?'#F0F0F0':'white'),elevation:(texti=='password'?5:0),paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    onFocus={()=>setTextI('password')}
                    placeholderTextColor = "gray"
                    placeholder="  Password"
            ></TextInput>
            
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'80%',alignSelf:'center',alignItems:'center'}}>
                <Text style={{...style.tStyle,fontWeight:'500',fontSize:13}}>Gender</Text>
                <View style={{backgroundColor:'red',borderRadius:100,width:40,height:40,justifyContent:'center',alignItems:'center'}}><Text><FontAwesome5 onPress={()=>onPress()} name={'male'}  size={26} style={{color:'white'}} /></Text></View>
            
                <Text style={{fontWeight:'500',fontSize:13,lineHeight:20,...style.tStyle}}>or</Text>
                <View style={{backgroundColor:'red',borderRadius:100,width:40,height:40,justifyContent:'center',alignItems:'center'}}><Text><FontAwesome5 onPress={()=>onPress()} name={'female'}  size={26} style={{color:'white'}} /></Text></View>
            </View>
            
            <Button title={'Login'} buttonStyle={{width:'80%',height:53,backgroundColor:'#FF3737',alignSelf:'center',borderRadius:10}} />
            <TouchableOpacity onPress={()=>navigation.navigate('EnterOTP')}><Text style={{fontWeight:'600',fontSize:13,lineHeight:18,fontFamily:'Poppins-Regular',alignSelf:'center',color:'#EA2424'}}>Forget password ?</Text></TouchableOpacity>
            <Text style={{textAlign:'center'}}> or </Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:'80%',alignSelf:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../../statics/google.png')}/>
                    <Text style={{color:'black',marginLeft:5}}>Google</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../statics/fb.png')}/>
                    <Text style={{color:'black',marginLeft:5}}>facebook</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{textAlign:'center',fontWeight:'500',fontSize:13,lineHeight:19,...style.tStyle,color:'#EA2424'}}>Don’t have an account ? Join Us  </Text></TouchableOpacity>
            
        </View>
        </KeyboardAwareScrollView>
    )
}

export default Register;
const style=StyleSheet.create({
    tStyle:{
        fontFamily:'Poppins-Regular',
        textAlign:'center',
        color:'black'
    }
})