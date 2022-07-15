import React,{useEffect,useReducer,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../components/Header';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import Toast from 'react-native-toast-message';

const data = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },

  ];
const Account=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    const [user,setUser]=useState({name:'abcd',phone:'98XXXXXXX1',email:'abc@gmail.com',gender:'male'})
    const [edit,setEdit] = useState(false);

      useEffect(() => {
   
      },[]);
      
    return(
        <KeyboardAwareScrollView contentContainerStyle={{backgroundColor:'white',height:720}}>
        <View style={{backgroundColor:'white',paddingHorizontal:25}}>
            <View style={headerStyles.container}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image source={require('../../statics/menu.png')}/>
            </TouchableOpacity>
            <Text style={{color:'black',fontWeight:'600',fontSize:18,fontFamily:'Poppins-Medium',textAlign:'center',justifyContent:'center', lineHeight:26}}>{edit==false?'My Profile':'Edit Profile'}</Text>
           {edit==false?(<MaterialCommunityIcons
            onPress={()=>setEdit(true)}
                    name="pencil"
                    size={25}
                    color={'#FF3737'}
                    />):(<Text>''</Text>)} 
            
            </View>
            <View style={{justifyContent:'space-evenly',marginTop:10,paddingHorizontal:20}}>
                <>
                {edit==false?(
                    <View style={{width:'100%',height:80,alignSelf:'center',marginTop:10,flexDirection:'row',borderBottomColor:'#D9D9D9',borderBottomWidth:1}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{color:'#FF3737',fontSize:24,fontFamily:'Poppins-Medium', fontWeight:'600',lineHeight:36,marginBottom:5}}>Hey Kaiful !</Text>
                            <Text style={{fontFamily:'Poppins-Medium',fontWeight:'500',fontSize:13,color:'#B4B4B4',marginRight:19}}>+91 3456467888</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-end'}}>
                            <Image source={require('../../statics/poster.png')} style={{width:65,height:65,borderRadius:100}}/>
                        </View>
                    </View>
                ):(<View style={{alignSelf:'center',width:120,height:120,borderColor:'black',borderWidth:1,borderRadius:100,alignItems:'center',justifyContent:'center',marginBottom:-20}}>
                       <Image source={require('../../statics/poster.png')} style={{width:100,height:100,borderRadius:100}}/>
                </View>)}
                </>
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Name</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.name}</Text>):(
                        <TextInput
                        style={{width:'100%',borderBottomColor:'#FF3737',borderBottomWidth:1,color: 'black'}}
                        editable={true}
                        placeholderTextColor = "gray"
                        onChangeText={(text)=>{setUser({...user,name:text})}}
                        value={user.name}
                        ></TextInput> 
                    )}
                </View>
                {edit==false?(<>
                    <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                        <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Phone Number/Email Address</Text>
                        <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.phone}</Text>
                    </View></>
                    ):null}
           
                
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Gender</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.email}</Text>):(
                        <Dropdown
                        //   style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        selectedTextStyle={{fontSize:13,color:'black'}}
                        //   inputSearchStyle={styles.inputSearchStyle}
                        //   iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search..."
                        value={user.gender}
                        onChange={(item) => {
                            setUser({...user,gender:item.label})
                        }}
                       
                        />
                    )}
                </View>
                
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Age</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.email}</Text>):(
                        <TextInput
                        style={{width:'100%',borderBottomColor:'#FF3737',borderBottomWidth:1,color: 'black'}}
                        editable={true}
                        placeholderTextColor = "gray"
                        placeholder=" Address Line 1"
                        onChangeText={(text)=>{setUser({...user,email:text})}}
                        value={user.email}
                        ></TextInput> 
                    )}
                </View>
                
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Address</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.email}</Text>):(
                        <TextInput
                        style={{width:'100%',borderBottomColor:'#FF3737',borderBottomWidth:1,color: 'black'}}
                        editable={true}
                        placeholderTextColor = "gray"
                        placeholder=" Address Line 1"
                        onChangeText={(text)=>{setUser({...user,email:text})}}
                        value={user.email}
                        ></TextInput> 
                    )}
                </View>
                
              
              
            </View>
            {edit==true?(
                <>
                <View style={{marginTop:30,alignSelf:'center',width:'100%',paddingHorizontal:20}}>
                    <Button title="Update" onPress={()=>setEdit(false)} buttonStyle={{width:'100%',borderRadius:10,height:53,alignSelf:'center',backgroundColor:'#EA2424'}}/>
                </View>
                </>
            ):(<Image source={require('../../statics/logout.png')} style={{alignSelf:'center',width:'50%',height:46}}/>)}
        </View>
        </KeyboardAwareScrollView>
    )
}

export default Account;
const headerStyles=StyleSheet.create({
    container:{
      
        width:'100%',
        backgroundColor:'white',
        elevation:0,
        height:50,
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:0,
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'center'
    }
 })