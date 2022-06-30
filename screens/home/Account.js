import React,{useEffect,useReducer,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import axios from "axios";
// import Toast from 'react-native-toast-message';

const Account=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    const [user,setUser]=useState({name:'abcd',phone:'98XXXXXXX1',email:'abc@gmail.com'})
    const [edit,setEdit] = useState(false);

      useEffect(() => {
   
      },[]);
      
    return(
        <KeyboardAwareScrollView contentContainerStyle={{height:700}}>
        <View style={{backgroundColor:'black',flex:1,paddingTop:0}}>
            <View style={{flex:0.5,borderWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:'6%'}}>
                <TouchableOpacity onPress={()=>navigation.goBack() }>
                    <Image source={require('../../statics/back.png')}  style={{backgroundColor:'#4e4060',width:30,height:30,borderRadius:100,borderWidth:1}}/>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',alignSelf:'center',marginRight:10,fontFamily:'Poppins-Regular',fontSize:18,fontWeight:'600'}}>Account</Text>
                <TouchableOpacity onPress={()=>setEdit(true)}>
                    <Image  source={require('../../statics/edit.png')} style={{marginTop:2}} />
                </TouchableOpacity>
                </View>
                <Text >'         '</Text>
            </View>
            <View style={{flex:2,justifyContent:'space-evenly',paddingLeft:'6%',marginTop:30}}>
                <Text style={{color:'#6644B8',fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600'}}>Name</Text>
                {edit==false?(<Text style={{color:'white',fontFamily:'Poppins-Regular',fontSize:14,fontWeight:'400'}}>{user.name}</Text>):(
                    <TextInput
                    style={{width:'60%',borderBottomColor:'gray',borderBottomWidth:1,  color: 'white'}}
                    editable={true}
                    placeholderTextColor = "gray"
                    onChangeText={(text)=>{setUser({...user,name:text})}}
                    value={user.name}
                    ></TextInput> 
                )}
                <Text style={{color:'#6644B8',fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600'}}>Phone No.</Text>
                {edit==false?(<Text style={{color:'white',fontFamily:'Poppins-Regular',fontSize:14,fontWeight:'400'}}>{user.phone}</Text>):(
                    <TextInput
                    style={{width:'60%',borderBottomColor:'gray',borderBottomWidth:1,  color: 'white'}}
                    editable={true}
                    placeholderTextColor = "gray"
                 
                    onChangeText={(text)=>{setUser({...user,phone:text})}}
                    value={user.phone}
                    ></TextInput> 
                )}
                <Text style={{color:'#6644B8',fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600'}}>Email</Text>
                {edit==false?(<Text style={{color:'white',fontFamily:'Poppins-Regular',fontSize:14,fontWeight:'400'}}>{user.email}</Text>):(
                    <TextInput
                    style={{width:'60%',borderBottomColor:'gray',borderBottomWidth:1,  color: 'white'}}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Address Line 1"
                    onChangeText={(text)=>{setUser({...user,email:text})}}
                    value={user.email}
                    ></TextInput> 
                )}
              
            </View>
           {edit==false?(
            <>
            <View style={{borderBottomColor:'#727272',borderBottomWidth:1,flex:0.1,marginBottom:2}}></View>
            <View style={{flex:1,justifyContent:'space-evenly',paddingLeft:'6%'}}>
                <Text style={{color:'white',fontFamily:'Poppins-Regular',fontSize:14,fontWeight:'600'}}>Subsctiption Details</Text>
                <Text style={{color:'#6644B8',fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600'}}>Premium Plan</Text>
            </View>
            </>
           ):null} 

            
            <View style={{flex:2}}></View>
            {edit==true?(
                <>
                <View style={{position:'absolute',top:'90%',alignSelf:'center',width:'100%'}}>
                    <Button title="Update" onPress={()=>setEdit(false)} buttonStyle={{width:'70%',borderRadius:15,height:46,alignSelf:'center',backgroundColor:'#6644B8'}}/>
                </View>
               
                </>
            ):null}
        </View>
        </KeyboardAwareScrollView>
    )
}

export default Account;