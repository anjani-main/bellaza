import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
import Bookingdetails from './Bookingdetails';
import { createStackNavigator } from '@react-navigation/stack';

const Bookings=({navigation})=>{

  
    const OrderCardClickable=({orderId,name,date,time,status})=>{
        return(
            <>
            <TouchableOpacity  onPress={()=>{navigation.navigate('Bookingdetails')}}>
            <View style={{width:'88%',height:92,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15,justifyContent:'space-evenly'}}>
                <Text style={{color:'black'}}>Order ID : {orderId} </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                <Text  style={{color:'#FF3737',fontSize:15,fontWeight:'500',lineHeight:22,fontFamily:'Poppins-Regular'}}>{name}</Text>
                <View style={{backgroundColor:(status=='completed'?'#FF3737':'#1AA51F'),width:91,height:31,borderRadius:10,alignItems:'center',justifyContent:'center'}}><Text style={{color:'white'}}>{status}</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>{date}</Text>
                    <Text>{time}</Text>
                </View>
            </View>
            </TouchableOpacity>
            </>
        )
    }

    
    useEffect(()=>{
       
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:0}}>
            <Header nav={navigation} title={'My Bookings'}/>
            <View style={{marginBottom:100,marginTop:20}}>
            <OrderCardClickable  navigation={navigation} orderId={123123143} name={'Loreal Salon & Spa'} date={'03/07/2022'} time={'15:23 '} status={'upcoming'}/>
            <OrderCardClickable  navigation={navigation} orderId={123123143} name={'Loreal Salon & Spa'} date={'03/07/2022'} time={'15:23 '} status={'completed'}/>
           </View>
        </ScrollView>
    )

}
const Stack=createStackNavigator();
const BookingNavigation=()=>{
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },   
        }} 
        initialRouteName={'Bookings'}>
              
            <> 
            <Stack.Screen name="Bookings" component={Bookings} /> 
            <Stack.Screen name="Bookingdetails" component={Bookingdetails} options={{
                headerShown:false
            }}
            /> 
            
            </>
          </Stack.Navigator>
    )
}

export default BookingNavigation;