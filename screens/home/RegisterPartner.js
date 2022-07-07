import React,{useState,useEffect} from "react";
import {View,Text,TextInput,Image} from 'react-native';
import { Button } from "react-native-elements";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from "../../components/Header";
import { createStackNavigator } from "@react-navigation/stack";

const RegisterPartner=({navigation})=>{
    return(
        <KeyboardAwareScrollView contentContainerStyle={{height:680}}>
            <Header title="Become a partner"/>
        <View style={{backgroundColor:'white',flex:1,justifyContent:'space-evenly',paddingLeft:25,paddingRight:25}}>


            <Text style={{fontWeight:'500',fontSize:14,lineHeight:21,color:'#FF3737'}}>Please fill the form</Text>
            <View>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:14,color:'black',fontWeight:'500',lineHeight:21}}>Your Name</Text>
            <TextInput
                    style={{width:'100%',height:43,borderWidth:1,borderRadius:8,borderColor:'gray', color: 'black',backgroundColor:'white',paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your name"
            ></TextInput>
            </View>
            <View>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:14,color:'black',fontWeight:'500',lineHeight:21}}>Phone</Text>
            <TextInput
                    style={{width:'100%',height:43,borderWidth:1,borderRadius:8,borderColor:'gray', color: 'black',backgroundColor:'white',paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your number"
            ></TextInput>
            </View>
            <View>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:14,color:'black',fontWeight:'500',lineHeight:21}}>Email</Text>
            <TextInput
                    style={{width:'100%',height:43,borderWidth:1,borderRadius:8,borderColor:'gray', color: 'black',backgroundColor:'white',paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder=" Enter Email name"
            ></TextInput>
            </View>
            <View>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:14,color:'black',fontWeight:'500',lineHeight:21}}>Business Name</Text>
            <TextInput
                    style={{width:'100%',height:43,borderWidth:1,borderRadius:8,borderColor:'gray', color: 'black',backgroundColor:'white',paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder=" Enter business name"
            ></TextInput>
            </View>
            <View>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:14,color:'black',fontWeight:'500',lineHeight:21}}>Business Address</Text>
            <TextInput
                    style={{width:'100%',height:43,borderWidth:1,borderRadius:8,borderColor:'gray', color: 'black',backgroundColor:'white',paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    
                    //onChangeText={(text)=>{setEmail(text)}}
                    //value={email}
                    placeholderTextColor = "gray"
                    placeholder=" Enter business address"
            ></TextInput>
            </View>
           
            <Button onPress={()=>navigation.navigate('RegisterPartnerConfirmed')}   title={'Apply now'} buttonStyle={{width:'100%',height:53,backgroundColor:'#EA2424',borderRadius:10,marginVertical:30}} />
           

        </View>
        </KeyboardAwareScrollView>
    )
}

const RegisterPartnerConfirmed=({navigation})=>{
    return(
        <View style={{flex:1,justifyContent:'space-evenly'}}>
              <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',marginTop:40}}/>
              <Image source={require('../../statics/rpc.png')} style={{alignSelf:'center',marginTop:10,width:300,height:300}}/>
              <View>
              <Text style={{paddingLeft:25,fontFamily:'Poppins-Regular',color:'#FF3737',fontSize:20,lineHeight:22.5,marginTop:20,fontWeight:'600',alignSelf:'center'}}>Your form have been submitted</Text>
              <Text style={{paddingLeft:25,fontFamily:'Poppins-Regular',color:'#FF3737',fontSize:14,lineHeight:22.5,marginTop:15,fontWeight:'500',alignSelf:'center',width:'70%',textAlign:'center'}}>Our representative will get in touch with you as soon as possible</Text>
              </View>
             
              <Button onPress={()=>{
                 navigation.reset({
                    index: 0,
                    routes: [{name: 'Home2'}],
                  });
              }}   title={'Back to home'} buttonStyle={{width:'85%',alignSelf:'center', height:53,backgroundColor:'#EA2424',borderRadius:10,marginVertical:30}} />

        </View>
    )
}

const Stack=createStackNavigator();
const RegisterPartnerNavigation=()=>{
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },   
        }} 
        initialRouteName={'RegisterPartner'}>
              
            <> 
            <Stack.Screen name="RegisterPartner" component={RegisterPartner} /> 
            <Stack.Screen name="RegisterPartnerConfirmed" component={RegisterPartnerConfirmed} options={{
                headerShown:false
            }}
            /> 
            
            </>
          </Stack.Navigator>
    )
}

export default RegisterPartnerNavigation;