
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
    const [texti,setTextI]=useState();
    const [terms,setTerms]=useState(false);
    const [gender,setGender]=useState('male');

    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:680}}>
        <View style={{backgroundColor:'white',flex:1,justifyContent:'space-evenly'}}>
        <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',marginTop:10}}/>
            <Text style={{fontFamily:'Poppins-Bold',color:'black',alignSelf:'center',fontWeight:'600',fontSize:20,lineHeight:30}}>Join Us</Text>
            <Text style={{...style.tStyle,fontWeight:'500',fontSize:14,lineHeight:21,color:'#787878'}}>Discover your favourite salon near you</Text>
            <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='name'?'#F0F0F0':'white'),elevation:(texti=='name'?5:0),paddingLeft:15,marginTop:30}}
                    multiline={true}
                    editable={true}
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    onFocus={()=>setTextI('name')}
                    placeholderTextColor = "gray"
                    placeholder="  Name"
            ></TextInput>
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
             <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='age'?'#F0F0F0':'white'),elevation:(texti=='age'?5:0),paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    onFocus={()=>setTextI('age')}
                    placeholderTextColor = "gray"
                    placeholder="  Age"
            ></TextInput>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'80%',alignSelf:'center',alignItems:'center'}}>
                <Text style={{...style.tStyle,fontWeight:'500',fontSize:13}}>Gender</Text>
                <TouchableOpacity onPress={()=>setGender('male')}>
                <View style={{backgroundColor:(gender=='male'?'#FF3737':'white'),borderRadius:100,width:40,height:40,justifyContent:'center',alignItems:'center',borderColor:'#FF3737',borderWidth:1}}>
                   
                        {gender=='male'?<Image source={require('../../statics/malew.png')} />:<Image source={require('../../statics/male.png')} />}
                 
                </View>
                </TouchableOpacity>
            
                <Text style={{fontWeight:'500',fontSize:13,lineHeight:20,...style.tStyle}}>or</Text>
                <TouchableOpacity onPress={()=>setGender('female')}>
                <View style={{backgroundColor:(gender=='female'?'#FF3737':'white'),borderRadius:100,width:40,height:40,justifyContent:'center',alignItems:'center',borderColor:'#FF3737',borderWidth:1}}>
                  
                        {gender=='female'?<Image source={require('../../statics/femalew.png')}/>:<Image source={require('../../statics/female.png')}/>}
                
                </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',width:'80%'}}>
            <CheckBox
                center
                title=''
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={terms}
                size={24}
                checkedColor='#F55633'
                containerStyle={{alignSelf:'center',justifyContent:'center',alignContent:'center'}}
                onIconPress={()=>{setTerms(!terms)}}
                />
                <Text style={{fontSize:10,fontWeight:'500',lineHeight:15,...style.tStyle}}>I Agree with the <Text style={{color:'#FF3737'}}>Term of Service</Text> & <Text style={{color:'#FF3737'}}>Privacy Policy</Text></Text>
            </View>
            <Button  onPress={()=>navigation.navigate('Home')} title={'Sign Up'} buttonStyle={{width:'80%',height:53,backgroundColor:'#FF3737',alignSelf:'center',borderRadius:10}} />
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
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={{textAlign:'center',fontWeight:'500',fontSize:13,lineHeight:19,...style.tStyle,color:'#EA2424'}}>Have an account ? Log in </Text></TouchableOpacity>

        </View>
        </KeyboardAwareScrollView>
    )
}

export default Register;
const style=StyleSheet.create({
    tStyle:{
        fontFamily:'Poppins-Medium',
        textAlign:'center',
        color:'black'
    }
})