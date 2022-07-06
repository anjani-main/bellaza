import React,{useEffect,useState,useNa} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Modal,
  TouchableOpacity,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
// import axios from "axios";
import {Button, Icon} from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
 
const CustomSidebarMenu = (props) => {
  const navigation = useNavigation();
  const [coupon,setCoupon]=useState('');
  const [modal,setModal]=useState(false)
  useEffect(() => {
   
  },[]);

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
      <View style={{flexDirection:'column',height:50}}>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Account');}}>
       <Image source={require('../statics/Bellazza.png')} style={{alignSelf:'center',marginTop:50}}/>
      </TouchableOpacity>
     
        <Text style={{fontSize:16,fontWeight:'600',color:'white',marginTop:20,alignSelf:'center'}}>Guest User</Text>
       
      </View>

      <DrawerContentScrollView {...props}>
      <View style={{width:'97%',height:2,marginTop:40}}></View>
        <DrawerItemList {...props} style={{ height:200,borderColor:'red',borderWidth:1}}/>
        {/* <TouchableOpacity onPress={()=>setModal(true)}>
        <Text style={{color:'white'}}>Redeem</Text>
      </TouchableOpacity> */}
      {/* <DrawerItem
        label="Privacy policy"
        style={{color:'white'}}
        onPress={() => navigation.navigate('PrivacyPolicy')}
      />
      <DrawerItem
        label="Term of Use"
        style={{color:'white'}}
        onPress={() => navigation.navigate('TermsOfUse')}
      />
      <DrawerItem
        label="Support"
        style={{color:'white'}}
        onPress={() => navigation.navigate('Support')}
      /> */}
      </DrawerContentScrollView> 
      
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
 
export default CustomSidebarMenu;